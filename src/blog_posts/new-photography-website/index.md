---
path: "/new-photography-website"
date: "2019-07-05"
title: "Launching my new photography website"
---

#[My new photography site is live!](https://photography.reecemercer.dev/)
###I have this website for all my development antics, and I figured that since I take lots of pictures, I could create a website for them, and then get a new blog post out of it where I could talk about the development process too. So here we go.

&nbsp;

# Languages, frameworks and large media hosting
###The site is using a NodeJS backend with a ReactJS frontend. In fact, the backend in use on this site is the same one in use on the new photography site. I just set up separate endpoints and got to work. Since the site has to host high resolution and large file size images, hosting the images on GitHub would've been a bad idea. GitHub isn't really designed to store all the media that goes along with a website, in theory it's just for the source code. So I needed a new place to store things.

###I looked into a few different CMS's (Content Management Systems), but soon realised that they generally had way too many features and complications than made it worth it for what I was doing. I only needed to store and then programmatically access image files. They didn't need versioning or any fancy editing facilities that I'd have got with a CMS.

###After some thought I went with an Amazon Web Services (AWS) S3 Storage Bucket. These allow easy access rights settings (I can quickly allow global public read access on an uploaded object while knowing that nobody except me could access the right to delete). As an added bonus, the server space is SUPER super cheap. I could be storing 100's of GB of media and still be paying less than £10 a month for it. And the price per request is so small it's essentially not worth counting in this case. I'm clearly not going to be storing hundreds of gigs of photos anytime soon, but it's always nice to know the space and economics to scale is there if I need it.


#Backend architecture
###I created a few endpoints that my frontend would need in order to grab the data required:

  ### **1**:  .../photography/splash-image
  ### **2**: .../photography/collection-names
  ### **3**: .../photography/collection-description/:key
  ### **4**: .../photography/collection-contents/:key
  ### **5**: ...photography/collection-preview/:key


| Route        | Expected Request           | Returns  |
| ------------- |-------------  | ----- |
| **1**      | GET | URL to the image used on the home page of the website (more on the URLs later) |
| **2**      | GET      |   Returns a list of all photo collections and their names. Collections are essentially S3 folders. |
| **3**      | GET, with a key parameter      |    Given a key, return the description of the collection that matches that key. |
| **4**      |GET, with a key parameter| Given a key, return an array of URLs to all images in a collection that matches the key. (Includes both half and full resolution URLs).|
| **5**      |GET, with a key parameter|Given a key, return the URl for the half resolution preview image of the collection that matches the key.|

#Dealing with high resolution files
###It would be a fundamentally flawed idea to have the full resolution images as the only ones available to retrieve. Imagine you're on a mobile device or a device with a slower connection and then suddenly my site slams you with hundreds of images that are about 6mb each. Not a fun time. I wrote a small Python script that I run over the images prior to them being uploaded to the S3 server, it compresses them so that a half resolution counterpart is created. The half resolution one is always the one loaded by default, and the higher resolution ones can be accessed by users if they want to see them. It also renames each file set, using UUID4, to avoid filename clashes once the files are uploaded to the bucket.

###The Python script is quite small.


```
#!/usr/bin/env python3

import os
from shutil import which
import sys
from uuid import uuid4


# checks if the ImageMagick binaries are installed
def check_for_img_mgk():
    return which("convert") is not None


def validate_args():
    # firstly, has an argument been given?
    if len(sys.argv) < 2:
        exit("""Error: please provide, at minimum, an argument of the path to the images.
        -> $ bc.py <path> <(default 50) compression percentage>""")
    elif len(sys.argv) >= 4:
        exit("""Error: please provide no more than 2 arguments.
        -> $ bc.py <path> <(default 50) compression percentage>""")

    if len(sys.argv) == 3:
        try:
            sys.argv[2] = int(sys.argv[2])
            # if not caught, arg 2 is an int
        except ValueError:
            exit("""Second argument must be an int.
                -> $ bc.py <path> <(default 50%) compression percentage>""")

    # then, is the given argument a valid file path?
    if not os.path.exists(sys.argv[1]):
        exit("Error: '" + sys.argv[1] + "' is not a valid file path")

    # if so, is the given argument pointing to a folder?
    if not os.path.isdir(sys.argv[1]):
        exit("Error: '" + sys.argv[1] + "' is not a folder")

    # finally, does the folder contain only .jpg images?
    for file in os.listdir(sys.argv[1]):
        try:
            if not file.split('.')[1].lower() == "jpg":
                exit("Error: '" + file + "' is not a jpg file")
        except IndexError:
            exit("Error: '" + file + "' could not be parsed")

    # if program hasn't exited by this point, all is A-OK
    # return true with a compression percentage. Hardcoded 50% if not
    # decided by the user
    if len(sys.argv) == 3:
        return True, sys.argv[2]
    else:
        return True, 50


def rename_files():
    for root, dirs, files in os.walk(os.path.abspath(sys.argv[1])):
        for file in files:
            # Split the file name and its extension and store
            base_file_name = os.path.splitext(file)[0]
            extension = os.path.splitext(file)[1]
            # First use uuid4() to randomise the file name to avoid clashes when uploaded
            os.rename(os.path.join(root, file), root + "/" + "_" + str(uuid4()) + extension)


def compress(compression_percent):
    rename_files()
    wrapped = False
    for root, dirs, files in os.walk(os.path.abspath(sys.argv[1])):
        for file in files:
            # Split the file name and its extension and store
            base_file_name = os.path.splitext(file)[0]

            abs_path = os.path.join(root, file)
            # wrap absolute path in quotes if it contains any spaces
            if ' ' in abs_path:
                abs_path = "\"" + abs_path + "\""
                wrapped = True

            if wrapped:
                command = "convert " + abs_path + " -sampling-factor 4:2:0 -strip -interlace JPEG -colorspace sRGB -quality " + str(
                    compressionPercent) + "% " + os.path.dirname(abs_path) + "/" + str(base_file_name) + "-compressed.JPG\""
                print(command)
            else:
                command = "convert " + abs_path + " -sampling-factor 4:2:0 -strip -interlace JPEG -colorspace sRGB -quality " + str(
                    compressionPercent) + "% " + os.path.dirname(abs_path) + "/" + str(base_file_name) + "-compressed.JPG"
                print(command)
            print("Compressing: " + file)
            os.system(command)

        print("Compression finished!")


if __name__ == "__main__":
    if check_for_img_mgk():
        validated, compressionPercent = validate_args()
        if validated:
            compress(compressionPercent)

    else:
        exit("Error: it doesn't seem that you have the ImageMagick binaries installed")
```

###This is simply a small wrapper around the ImageMagick libraries. For the use case and installation instructions, visit the script's GitHub repo.

&nbsp;

#Generating public URLs for images
###After running that compression script, each images gets a half resolution version of itself in the same directory, with '-half' placed on the end of the filename. This makes it easy to search for a half resolution image, as you can just substring the filename, using'-half' as the search key. Once all the images are uploaded into their corresponding bucket, the backend has the job of generating the public URLs for each image. This is made easy due to the fact that the S3 storage bucket hosts files at the URL following this structure:

###[https://s3.\<REGION>.amazonaws.com/\<BUCKET NAME>/\<FILE PATH>]()

###So given the templated information, you can just create a function to plug the gaps:

```
// given an object's key (it's file absolute file path from bucket root), generate the public URL for it
function formatPublicURL(key){
  return `https://s3.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${key}`
}
```

###This is done for half and full resolution image keys, and is the function used to generate the arrays of URLs that are passed to the frontend to populate the site with images.

&nbsp;

#Links

###The site itself is hosted on a subdomain of this website (at [www.photography.reecemercer.dev](https://www.photography.reecemercer.dev))
###You can also [view the website's GitHub repository here](https://github.com/Reeceeboii/photography.reecemercer.dev)

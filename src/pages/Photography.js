import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import HeaderGeneric from '../components/HeaderGeneric'

import Layout from '../components/layout'

import index from '../assets/images/PhotographySite/index.jpg'
import collection from '../assets/images/PhotographySite/collection.jpg'
import collections from '../assets/images/PhotographySite/collections.jpg'
import view from '../assets/images/PhotographySite/view.jpg'
import backendCol from '../assets/images/PhotographySite/backend-collection.png'
import image from '../assets/images/PhotographySite/image-component.png'
import grid from '../assets/images/PhotographySite/grid.png'






class Photography extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Photography Website" />
        <HeaderGeneric headerText="photography.reecemercer.dev" paragraphText="A place for me to showcase my photography"/>
        <h3 style={{textAlign: `center`}}>GitHub repo - <a href="https://github.com/Reeceeboii/photography.reecemercer.dev" target="_blank" rel="noopener noreferrer">Photography website</a></h3>
        <h3 style={{textAlign: `center`}}>Link - <a href="https://photography.reecemercer.dev" target="_blank" rel="noopener noreferrer">photography.reecemercer.dev</a></h3>

        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={index} alt="" /></span>

            <h2><b>About this project</b></h2>
            <p>{`I do a lot of photography in my spare time, but most of the pictures I take end up just sat on my hard
                drive. I decided that since I'd had some experience throwing a few sites together with React and Node, I could do the same
                for my photography. The site contains 'collections' which are simply mirrors of folder objects on an Amazon Web Services S3
                storage bucket.`}</p>


            <span className="image main"><img src={collections} alt="" /></span>

            <p>{`Inside a collection, the backend grabs keys and generates public URLs for all the images (including
            both full resolution and compressed versions of each image) and passes them off to the frontend. Each of the compressed
            URLs is then mapped into an image component, which make up larger responsive grids of images which are Instagram-esque in their
            look and feel.`}</p>

            <span className="image main"><img src={backendCol} alt="" /></span>

            <p>{`- the backend route for a collection's image URLs`}</p>
            <p>{`You can view an example response `}<a href="https://rm-backend-services.herokuapp.com/photography/collection-contents/Nature">here</a></p>

            <span className="image main"><img src={image} alt="" /></span>
            <p>{`- the React component for a single image`}</p>

            <span className="image main"><img src={grid} alt="" /></span>
            <p>{`- the React component for a collection of images - mapping compressed public URLs into a grid`}</p>

            <span className="image main"><img src={collection} alt="" /></span>

            <p>{`And the result, you can then click on an individual image to get a larger view,
                or follow another link through to get the full resolution image.`}</p>

            <span className="image main"><img src={view} alt="" /></span>

            <p>{`As DSLR images are very large in size (sometimes around 6MB each), I had to compress them to make
                them suitable for web use. I was originally thinking of keeping this entirely in the cloud and using AWS Lambda or another
                serverless function compute service in order to compress images on the fly when it was needed. However, it was not worth the hassle
                when I could throw together a perfectly functional Python script to do the exact same thing in half the time, and then just run that over
                a set of images before they were uploaded.`}</p>

            <p>{`I wrote a small wrapper around the ImageMagick libraries and added things like file renaming with UUID4 (universally unique identifier)
                to avoid filename clashes on the server despite the camera's repetitive file naming system. This makes for quite a streamline system. I take pictures,
                compress and rename them (all done via 1 command thanks to my script) and then just upload them to my S3 bucket. And bang, they're instantly live on the site.
                The users load the compressed and light files on the site, and then go externally to the public S3 link to get the full resolution file if they want it.
                I wrote a blog post explaining more about why I chose S3 and some other small bits of detail regarding the backend that I left out here. If you're interested, you can read the
                post `}<Link to="/new-photography-website">here.</Link></p>


                <h3 style={{textAlign: `center`}}>You can also visit the site for yourself! - <a href="https://photography.reecemercer.dev" target="_blank" rel="noopener noreferrer">photography.reecemercer.dev</a></h3>


            <ul className="actions">
              <li><Link to="/" className="button">Return home</Link></li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Photography

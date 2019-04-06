---
path: "/business-systems-coursework"
date: "05/04/19"
title: "Business Systems module coursework"

---

###The first year of university is basically done, and I honestly swear I've done more programming in this last year than I have since I first started programming way back in secondary school. I've learnt an absolutely insane amount of content in a relatively small amount of time and I've loved every single second of it.

&nbsp;

###Anyway, Business Systems. This module revolved around systems used in essentially all businesses; the web and databases. Databases are everywhere. Big websites like Amazon and Ebay are nothing more than a nice looking interface for you to interact with a large database full of images, products, numbers and other users. The first term of the module was around relational databases, SQL and constructing entity relationship diagrams. I've never been the biggest fan of database related stuff (it's nothing inherently difficult, I just don't enjoy it that much). It was the second term that I absolutely loved. We were given a coursework task to build a dynamic website.

&nbsp;

# A what?

###Dynamic sites are different to static sites. My website (the one you're reading this post on) is a static site; every single person who views this web page sees exactly the same thing. If you look at a site such as Facebook, however, this is known as a dynamic site. My news feed will look different to your news feed, we like different pages and are friends with different people. This is what differentiates the two. Dynamic sites have some form of data persistence across sessions and allow dynamic data to be fed to the client depending on who is accessing certain pages.

###The coursework itself was relatively free form - aside from enforcing that we use some client-side JavaScript, we were open to explore any technologies we wanted to implement our sites. The focus of the sites was also left to our decision. After some thinking, I decided to use the following:

&nbsp;


###**Backend:** NodeJS & the Express.js server framework
###**Frontend:** ReactJS & Reactstrap
###**Database:** MongoDB *****
###**Hosting:** Heroku Dyno for serving the frontend and backend, and a MongoDB Atlas cluster for the database



\* *I originally set out to use MySQL as my database, but it turned out to be a lot more fiddly than I expected, and the university's network firewall seemed to block the particular port the server was using to host the database, so I couldn't work on things as smoothly as I would have liked to*.

&nbsp;

###There were a few reasons for my choices. Firstly, I've already had some experience in ReactJS (that's what I use to make this site) so using that for the frontend of the site I was making was a given. I chose NodeJS for the backend as the lecture content was covering Java, which I am comfortable in, and I figured it'd be much more of a learning experience for me to do it in a language I felt less at ease with. So I dived into Node and got to grips with the ES6 syntax (the arrow functions etc..)

&nbsp;


# And did I mess anything up?

###Long story short, yes. I messed them up pretty badly. I restarted a total of 5 times in fact. I hadn't done a *massive* amount of JavaScript before starting this project so it took me a fair amount of time to get a feel for Node and Express, and how I use those two to create an API to my database instance. I knuckled down over reading week, though, and ended up surprising myself with how far I got. I went into the week with some basic knowledge of making a server that can handle basic HTTP requests, and came out the other end with a REST API that was decently equipped with endpoints able to handle multiple request types as well as streamline the response to these requests based on URL parameters supplied by a user. My API could do things like receive a GET request to `/car/:id` (':id' being a parameter supplied by a user), and return the document from the 'cars' collection that matched that id. These documents would then be bought into the frontend, and dynamically mapped into React components and displayed to the user.

###I may have broken everything more than a few times to get there, but that's what learning's all about right?

&nbsp;

# Just show me the damn site already!

### Fine fine, [you can visit the site by clicking here](https://www.aczg110.co.uk)
*Please keep in mind that the repo for this site is public and other students know it exists. I cannot be held responsible for anything untoward that they may upload.*

###I decided to go with an e-commerce type of site, centered around buying and selling cars. After some brief planning, I knew I wanted to have the ability to buy cars as well as list ones to sell.

(*It obviously doesn't have any transactions or 'actual' purchases, but the proof of concept is still there*).

###I called it **Mercer Motors** 😄

###Users can sign up and view cars that are for sale, as well as buy these cars and list their own once they have an account. On the account page (only available to registered users), users can see tabs that include their purchases, as well as cars that they themselves have listed.

#Some technical details
### I was using MongoDB to store all my data. MongoDB is a NoSQL document database. This form of data is essentially JSON (JavaScript Object Notation) - documents are collections of key/value pairs. Below is a schema dump of one of the cars stored in the database.

`
{"_id":{
    "$oid":"5ca3830983584c034c582be5"
    },
    "owner":"Testaccount",
    "make":"Volvo",
    "model":"V60",
    "release_date":
    {"$date":{"$numberLong":"1252540800000"}},
    "price":{"$numberInt":"11500"},
    "type":"Sedan",
    "gearbox":"Manual",
    "sold":false,
    "__v":{"$numberInt":"0"}}
`

###What a mess right? Let's format it and remove some of the bits we don't need.

```
{
  "_id": "5ca3830983584c034c582be5",
  "owner": "Testaccount",
  "make": "Volvo",
  "model": "V60",
  "release_date": "2009-09-10",
  "price": 11500,
  "type": "Sedan",
  "gearbox": "Manual",
  "sold": "false"
}
```
###You can clearly see the key/value pairs, and how this document then represents a single car in the database. These documents have a schema that I defined in my backend code. To create these schemas and use them to create and save new documents, I used Mongoose. Mongoose is an ODM (Object Document Modeler) that is designed to work with MongoDB. You create schemas based simply of the names on the fields, and the data type that they are expected to hold. Here is the Mongoose schema for the car document referenced above:

```
const carSchema = new Schema({
    _id: Schema.ObjectId, owner: String, make: String,
    model: String, release_date: Date, price: Number,
    type: String, gearbox: String, sold: Boolean
});
```

###I then text-indexed this schema (essentially told mongoose which fields to treat as text when compared to a string query):

`carSchema.index({make: 'text', model: 'text', type: 'text', gearbox: 'text'});`

###You could then query the documents in the 'cars' collection against a query entered by a user. The query would only be polled against the fields defined as text in the index, so the search bar can take multiple different kinds of inputs ('volkswagen', 'automatic', 'hatchback' etc...) and still return relevant results. The static query I created for that follows:

```
carSchema.statics.getAllForSale = function(query, cb) {
    return this.find({ $text: {$search: query}, sold: false }, cb);
};
```
*'get me all cars matching `query` that have not yet been sold'*

###Most queries I created were similar to this.

```
// Find a car with a particular ID
carSchema.statics.findByID = function(id, cb) {
    return this.findOne({ _id: id }, cb);
};
```

```
// return all cars for sale that are owned by a certain user (sold or not sold)
carSchema.statics.ownedBy = function(username, cb) {
    return this.find({ owner: username }, cb);
};
```

###These queries were then typically executed as a result of a GET request to an API endpoint; the response of the endpoint to the user being the document (or documents) returned by the query, in JSON format.


```
// GET request to cars/search/:search endpoint
router.get('/search/:search', (req, res, next) => {
    carSchema.getAllForSale(sanitise(req.params.search))
       .exec()
       .then(doc => {
           res.status(200).json(doc);
       })
       .catch(err => {
          res.status(500).json({
              error: "Error from GET cars/:search",
              details: err
          })
       });
});
```

###The frontend then nicely formats this JSON data, mapping multiple documents into separate components where necessary, making the JSON response aesthetically pleasing for an end user to look at.

&nbsp;

#Things I struggled with
###The hardest thing by far was hosting the site. I expected Heroku to streamline the process, but I ended up having to do a horrible amount of tweaking to get things working. Just as the site popped up at the domain for the first time, and I felt a much deserved sense of satisfaction, the dreaded error popped up for the first time. A CORS violation. That's *cross origin resource sharing*. I had essentially been given the finger by my user authentication system - it worked like a charm during development, but in production it was now refusing to work. A CORS violation is in essence when a process running at one origin (my server at https://www.aczg110.co.uk) tries to make a request to another origin, and the browser making the request deems this process unsafe. In this case, my Okta sign in widget was trying to communicate with the Okta servers to authenticate a sign in, but the browser saw that as dodgy behaviour, and shot the request down before it could be actioned, leaving me with a newly found sense of disappointment and an unhealthy amount of debugging to do.

###Cut a long story short. I needed to whitelist my production site's /implicit/callback/ route in the Okta API whitelist section. Granted it's a simple fix, but it's not so simple when I had already listed '/implicit/callback' there early in the process, only to realise that that last trailing / was missing a long 5 or so hours later. I love computers.

&nbsp;

#Wrapping up
###I now have a fairly solid understanding of a backend language, and how to use it to build an API around a database. Definitely a skill that will be useful in the second year with the group project. I gained a lot more experience in React too. And if I can take one thing from this - CORS violations suck.

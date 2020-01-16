---
path: "/term-2-group-project-forethoughts"
date: "2020-01-16"
title: "Term 2 Group Project Forethoughts"
---

So this is one of the more interesting modules we have coming up over the next term. A double (30 credit) module based entirely around analysing, planning, designing, implementing and demonstrating a complete piece of software, as part of a 6 or 5 person team.

This will be the first module I've done that is based around working as part of a team, everything I have done at City so far has been modules where all assessed material is an individual effort, so this is a welcome change.

We were emailed a document a week or two ago regarding the actual task and expected team layout and it looks quite interesting. I haven't had a real chance to have a deep read of it yet since we're still in the middle of the exam period (last one in 1 day!), but from what I gather, we are designing a system for use by an airline to report ticket sales. It will essentially create reports that look spreadsheet-esque, including money made, tickets sold (with a few other complexities like different destinations and currency conversions).

It might turn out to be quite different though, this is just what I have gathered from the quick read I had a few days ago.

The document leaves the implementation quite ambiguous. We are meant to have meetings with a client, albeit a fake client played by one of the lecturers, to try and refine some of the requirements laid out in this initial document. However, from what I've seen, a web-based approach will be the simplest.

A database holding the ticket sale data and users, a backend web server exposing different endpoints for data retrieval and user authentication, and a frontend. I am fairly experienced with Node and React, so I am going to go down that route if I end up being one of the programmers.

## My main concerns

We are not allowed to use document databases like MongoDB :( so we will probably end up with MySQL. However, typically, MySQL instances are not left open to the web as MongoDB ones are. With MongoDB, you create a user, and authenticate with the database using a 'user:password@database' URL string stored as an environment variable on the backend server. However, from what I've gathered, MySQL Server is usually not left open to the web, and all requests are routed internally from within the same server that the backend web server is executed on. Bots scan for servers with port 3306 open solely to try and exploit MySQL authentication weaknesses and such.

You can access MySQL instances remotely using SSH tunnelling, and I believe I've seen someone hack this together from within an Express server itself, but it doesn't seem like that's what is meant to be done, so I am going to try and avoid any hacky solutions as much as possible. SSH tunnelling will be great for remote maintenance access, but maybe not so much for production web app data access.

I'm not sure though, I will need to do some more research into MySQL's authentication and remote access methods before I make any programming decisions; I've had a lot less experience here than with MongoDB.

If I do have to host them together, I will end up on AWS EC2 or DigitalOcean with an Ubuntu Server. I'm used to automatic deploys on an application platform like Heroku, but this seems out of the question here.

**Time to crack out my Linux skills :)**

I'm thinking of having the Ubuntu Server authenticate with GitHub using SSH keys, and then write a few shell scripts and Node micro-services that can listen for webhooks. I could set up a webhook on the backend's GitHub repo to send out a payload when we push to master, and then have the server clone the repository's code and launch it as a system process under PM2 when the webhook is received. I could set up a nice deploy cycle this way and maybe export some logs too.

But then I have my reservations, writing my own deploy cycle system seems like lots of unnecessary work - surely there's some tool or pre-made system that we can use. I'll have a hunt around on the web and GitHub before I do anything.

It's all up in the sky until we know a little more about our team structure and the overall structure of the system we have to implement. At least I'm not totally in the dark - I have no doubt that all of the React, Node and Linux skills I've picked over the last year will be masses of use to me over the coming term.

Overall, I'm looking forward to the challenge :)

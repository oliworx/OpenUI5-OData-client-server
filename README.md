
# NodeJS OData server with OpenUI5 client

This is an simple example project based on the [n-odata-server](https://github.com/htammen/n-odata-server)
utilizing [OpenUI5](http://openui5.org/) for the OData-client.

## Requirements
The OData-server requires Node.js v6.x or v8.x.

See https://nodejs.org/ (or https://nodejs.org/de/ ) for more information abou how to
install Node.js on your platform.

(if you switch the version of Node.js you have to delete `node_modules`
and `package-lock.json` and install the node modules again with `npm install`)

## Installation

After you have cloned (or downloaded and extracted) this repository
run `npm install` to install the backend Node.js modules.

To start the application run one of these three commands, they are all doing the same

    node server/server.js
    node .
    npm start

Now open http://localhost:3000 in a Webbrowser and you should see the UI5-app.

## Retrieve  Data
The index page also provides some links you can use to retrieve the data via the odata server.

To test the OData server we recommend to use a browser plugin e.g. Postman.

This are a few sample OData-requests to retrieve data with HTTP-GET-method:

* http://localhost:3000/odata/$metadata
* http://localhost:3000/odata/Sflight
* http://localhost:3000/odata/Sflight?$top=3
* http://localhost:3000/odata/Sflight?$top=2&$skip=3
* http://localhost:3000/odata/Sflight?$select=firstname,age
* http://localhost:3000/odata/Sflight?$count

## Demo
See a running demo op this app at https://calm-river-87255.herokuapp.com 
or https://ui5app.kurmis.com
(the free heroku dyno might take some time to start, so please be patient)

## Authentication and Authorization
The n-odata-server leverages the authentication and authorization mechanisms 
supplied by loopback. 

The n-odata-server has a [wiki page](https://github.com/htammen/n-odata-server/wiki/authorization) 
to help getting started easily with this topic.

## Using Docker to build an run the app
It's also quite easy to run the application in a Docker container.
This might be a good idea if you e.g. don't have a local node.js installation yet.

To create a Docker container after pulling the github repo to your
local pc just enter the following commands in a terminal window.

    cd <project folder>
    docker build -t node-odata-openui5 .
    docker run -it -p 3000:3000 --name my-odata-server node-odata-openui5

Then you can acces the application in your browser by entering:
`http://<host of your Docker container>:3000/`

You should now see the OpenUI5 application.

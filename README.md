
# NodeJS OData server with OpenUI5 client

This is an simple example project for the [n-odata-server](https://github.com/htammen/n-odata-server)
utilizing [OpenUI5](http://openui5.org/) for the OData-client.

After you cloned this repository
run `npm install` to install the backend NodeJS modules.

to start the application run

    node .

### Retrieve  Data
The index page also provides some links you can use to retrieve the data via the odata server.

To test the odata server we recommend to use a browser plugin e.g. Postman.

This are a few sample OData-requests to retrieve data with HTTP-GET-method:

* http://\<host\>:3000/odata/$metadata
* http://\<host\>:3000/odata/Sflight
* http://\<host\>:3000/odata/Sflight?$top=3
* http://\<host\>:3000/odata/Sflight?$top=2&$skip=3
* http://\<host\>:3000/odata/Sflight?$select=firstname,age
* http://\<host\>:3000/odata/Sflight?$count

## Authentication and Authorization
The n-odata-server leverages the authentication and authorization mechanisms 
supplied by loopback. 

The n-odata-server has a [wiki page](https://github.com/htammen/n-odata-server/wiki/authorization) 
to help getting started easily with this topic.

## Docker
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

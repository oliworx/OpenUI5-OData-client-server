#########################################
###
###	This Dockerfile can be used to build an image that encloses the application
###
#########################################

FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD [ "npm", "start" ]

expose  :3000

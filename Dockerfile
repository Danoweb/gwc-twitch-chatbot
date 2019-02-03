FROM node:latest

#Set our Node Environment (Should always be PRODUCTION, developers have 'compose-override')
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

#Install depenencies First in a different location for app bind mounting
WORKDIR /opt

COPY package.json* ./ 

RUN npm install --no-optional && npm cache clean --force

ENV PATH /opt/node_modules/.bin:$PATH

#Add our Changes Monitor
RUN npm install -g nodemon

#HEALTHCHECK
HEALTHCHECK --interval=30s CMD node healthcheck.js

#Copy in our source code last
WORKDIR /opt/app

COPY ./app /opt/app

# the official node image provides an unprivileged user as a security best practice
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node

#Run our Node App
CMD [ "node", "./app/index.js" ]
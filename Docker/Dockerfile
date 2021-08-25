# build
FROM node:latest

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN node --version
RUN npm --version

RUN npm i
 
EXPOSE 3000

CMD ['npm', 'start']




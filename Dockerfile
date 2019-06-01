FROM node:12.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package.json /src/app

RUN npm install

COPY . /src/app

ENV NODE_ENV=production
ENV LOCAL_PORT=3003
ENV CON_STRING=postgresql://rei:batman123@descriptions.cgekeislvfza.us-west-2.rds.amazonaws.com:5432/descriptions

EXPOSE 3003

CMD [ "npm", "start" ]

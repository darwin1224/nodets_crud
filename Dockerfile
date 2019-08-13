FROM node:10.15.0-alpine

WORKDIR /var/www/html

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE ${BACKEND_PORT}

CMD [ "npm", "run", "watch" ]
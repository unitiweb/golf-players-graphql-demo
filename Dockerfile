FROM node:11-alpine
RUN apk add bash vim
RUN npm install knex -g
WORKDIR /app
COPY package*.json knexfile.js ./
COPY migrations migrations
COPY src src
COPY .env .env
RUN npm install
CMD ["npm", "run", "start"]

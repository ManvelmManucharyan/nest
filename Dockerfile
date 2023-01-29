FROM node:18.12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]
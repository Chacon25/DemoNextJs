FROM node:latest

RUN mkdir -p /my-app/src
WORKDIR /my-app/src

COPY package.json /my-app/src

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]
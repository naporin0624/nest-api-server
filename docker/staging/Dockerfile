FROM node:10


WORKDIR /usr/src/app

ARG WS_PORT
ARG WS_HOST

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

CMD yarn migration:prod && yarn start:prod
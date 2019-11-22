FROM node:10


WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn build

CMD yarn migration:run && yarn start:prod
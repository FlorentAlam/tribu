FROM node:14.16

WORKDIR /usr/src/api

COPY ./ ./

RUN yarn install

EXPOSE 4201

CMD ["yarn", "start"]
FROM node:14.16

WORKDIR /usr/src/app

COPY ./ ./

RUN yarn global add @angular/cli && yarn install

EXPOSE 4200

CMD ["yarn", "docker"]
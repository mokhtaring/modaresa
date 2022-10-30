FROM node:16.15.0

LABEL maintainer="Brahim MOKHTARI <mokhtari.ing@gmail.com"

WORKDIR /tunnel

EXPOSE 3000

COPY .. .

RUN yarn install

CMD yarn start
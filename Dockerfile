# select image
FROM node:10.22.1-alpine
WORKDIR /usr/src/app

ADD package.json yarn.lock ./
RUN yarn

ADD tsconfig.json ./
ADD ./src/ ./src
ADD ./public/ ./public

ENV NPM_CONFIG_LOGLEVEL verbose

EXPOSE 3000
CMD ["sh", "-c", "yarn dev"]

FROM node:14.15-alpine

WORKDIR /app
COPY . .

RUN yarn

ENV PATH="$PATH:/app/bin"


FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY /
RUN yarn && yarn run build

EXPOSE 3080

CMD ["node", "./api/server.js"]
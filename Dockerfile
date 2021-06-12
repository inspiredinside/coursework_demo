FROM node:14-alpine
RUN apk update
RUN yarn global add serve
WORKDIR /opt/app
ADD package.json package.json
RUN npm install
ADD  . .
RUN npm run build
EXPOSE 4000
CMD ["serve", "build", "-n", "-s", "-l", "4000"]


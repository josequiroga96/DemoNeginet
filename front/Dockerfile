FROM node:14.15.5 as node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=node /app/dist/demo /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

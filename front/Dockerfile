FROM node:14.15.5 as node
WORKDIR /app
COPY ./ /app/

FROM nginx:alpine
COPY --from=node /app/dist/demo /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

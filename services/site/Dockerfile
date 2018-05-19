FROM nginx

COPY ./services/site/config /etc/nginx/conf.d
COPY ./node_modules /srv/www/node_modules
COPY ./documents /srv/www/documents
COPY ./src /srv/www/

RUN ls -la /etc/nginx/conf.d
RUN ls -la /srv/www

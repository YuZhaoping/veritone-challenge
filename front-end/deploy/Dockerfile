FROM nginx:1.21-alpine

VOLUME ["/etc/nginx", "/usr/share/nginx/html", "/var/log/nginx"]

COPY config  /etc/nginx/
COPY dist    /usr/share/nginx/html/

EXPOSE 80

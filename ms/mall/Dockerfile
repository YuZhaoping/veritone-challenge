FROM node:alpine3.14


ENV APP_HOME="/opt/veritone/app"

RUN set -x \
    && addgroup -g 1010 -S veritone \
    && adduser -S -D -H -u 1010 -h $APP_HOME -s /sbin/nologin -G veritone -g veritone veritone \
    && mkdir -p $APP_HOME \
    && chown -R veritone:veritone $APP_HOME

USER veritone

WORKDIR $APP_HOME


COPY --chown=veritone:veritone package.json $APP_HOME/

RUN npm install


COPY --chown=veritone:veritone babel.config.js $APP_HOME/
COPY --chown=veritone:veritone public $APP_HOME/public/
COPY --chown=veritone:veritone src $APP_HOME/src/


COPY --chown=veritone:veritone docker-entrypoint.sh $APP_HOME/
ENTRYPOINT ["./docker-entrypoint.sh"]


EXPOSE 3000
CMD ["start-app"]

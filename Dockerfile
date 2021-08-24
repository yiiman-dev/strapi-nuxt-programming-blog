FROM alpine:3.14

# set front port

ARG DB_CLIENT='mysql'
ARG DB_HOST='0.0.0.0'
ARG DB_PORT=3306
ARG DB_USERNAME='root'
ARG DB_PASSWORD=''
ARG DB_NAME='pblog'

ARG NUXT_HOST='0.0.0.0'
ARG NUXT_PORT=5000

ARG BACK_URL="http://localhost:1337"
ARG BACK_HOST='0.0.0.0'
ARG BACK_PORT=1337


ENV DATABASE_CLIENT=$DB_PORT
ENV DATABASE_PORT=$DB_PORT
ENV HOST=$BACK_HOST
ENV NUXT_HOST=$NUXT_HOST
ENV NUXT_PORT=$NUXT_PORT
ENV API_URL=$BACK_URL
ENV PORT=$BACK_PORT
# expose 5000,1337 on container
EXPOSE $BACK_PORT
EXPOSE $NUXT_PORT

RUN echo "db client :" $DB_CLIENT;
RUN echo "db host :" $DB_HOST;
RUN echo "db post :" $DB_PORT;
RUN echo "db username :" $DB_USERNAME;
RUN echo "db name :" $DB_NAME;

RUN apk add git
RUN apk add nodejs
RUN apk add npm
RUN npm i -g yarn
RUN mkdir -p /var/src/yiiman
COPY . /var/src/yiiman/

ENV NODE_ENV=production


# Install
RUN npm config set registry https://registry.npmjs.org/

WORKDIR /var/src/yiiman/frontend/
RUN yarn install --ignore-scripts
WORKDIR /var/src/yiiman/backend/
RUN yarn install --ignore-scripts

WORKDIR /var/src/yiiman/frontend/
RUN yarn run build --production --loglevel=error
WORKDIR /var/src/yiiman/backend/
RUN yarn run build --production --loglevel=error

WORKDIR /var/src/yiiman/
CMD [ "yarn", "start" ]

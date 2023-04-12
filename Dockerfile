FROM node:16.16.0-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN cp .env.production .env
RUN yarn install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN yarn run generate

# expose 5000 on container
EXPOSE 8000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=8000

# start the app
CMD [ "yarn", "start" ]

# Gazette Client - Distributable Frontend

An experimental client for Gazette CMS tailored to be focused on the User's Experience

We plan to have 2 distributables types out of this source-code:

- A static generated website that builds & deploys itself from time to time to the repo as the user's interactions are hold in a store in the client and send a request with the updates once at an interval (experimental at this point);
- (the traditional one/way) - a SPA that communicates with [the server](link to server repo)

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

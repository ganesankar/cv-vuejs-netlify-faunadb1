# cv-vuejs-netlify-faunadb


> Nuxt.js example for running Netlify functions locally in a dev environment and as a generated static site deployed to Netlify.


## Demo
Live demo can be found [here](https://ganesan-cv-vuejs.netlify.com/).


## Build Setup

``` bash
# Use Node version specified in nvmrc
$ nvm use

# Install dependencies
$ yarn

# Build Nuxt app
$ yarn build

# Serve Nuxt app and Netlify functions at localhost:8888
$ netlify dev

# Generate static project
$ yarn generate
```

## Running Tests
Tests use the Netlify CLI to run the serverless functions locally. You'll probably be prompted to login with your Netlify account.

``` bash
# Run tests
$ yarn test
```
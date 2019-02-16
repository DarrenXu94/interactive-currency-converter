# interactive-currency-converter
Website that converts currency using an API and also shows the locations on a map

![screenshot from 2019-02-16 20-37-49](https://user-images.githubusercontent.com/16931153/52897620-cebcb680-322a-11e9-9115-b322a993a92e.png)

## Live Site
https://currency-convertor.netlify.com/

## Devving locally

`node server.js`

View on port 3000

## Things I learnt

### Using NextJS

Deploying a static NextJS page. Build command:

`next build & next export`

The files build to an automatically generated folder 'out'

### Using Netlify

#### Deployment

Deploys can be triggered using Github master pushes.

#### Lambda Functions

Instead of having a sever AWS Lambda functions can be used. These functions have to be single file and cannot require imports. They are used for the Currency API calls.

Secrets are stored in Netlify's build variables.

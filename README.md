# FindMyPet

A tool to help find lost pets in the GTA.

## Stack

- React
- Express
- Node
- MongoDB

## Running Locally

Install dependencies with either `yarn` or `npm` then start using `yarn watch`. A private key is also needed for the middleware, make a `private.pem` file in the root of the project and generate a private key and paste it there.  
(this project also uses mongodb so make sure that's running also.)

### With docker

`docker-compose up -d`

## Tests

`yarn test` to run tests or `yarn run:cov` for tests & coverage.

# FindMyPet

A tool to help find lost pets in the GTA.

## Stack

- React
- Express
- Node
- MongoDB

## Running Locally

### Backend

Install dependencies with either `yarn` or `npm` then start using `yarn watch`. A private key is also needed for the middleware, make a `private.pem` file in the root of the project and generate a private key and paste it there.  
(this project also uses mongodb so make sure that's running also.)

### Frontend

Change directories into the `frontend` folder and run `yarn` then `yarn start` (will have everything working in docker soon)

### With docker (for the backend)

`docker-compose up -d`

## Tests

`yarn test` to run tests or `yarn run:cov` for tests & coverage.

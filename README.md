# About

Petfinder is a website I built to help pet owners find their lost pets.

## Technology

Next.js  
ChakraUI  
RTL (React Testing Library)  
GraphQL  
Prisma  
Postgres

## Installation

Install the dependencies using `npm` or `yarn`, then run the project with `npm run dev` or `yarn dev`.

## Environment varibles

All required environment variables are located in the `.env.example` file in the root of the project.

Reminder: rename the `.env.example` file to just `.env`.

### OAuth

This website supports login with github currently and you'll have to set up a new OAuth application through github to ensure it works. To get started go [here](https://docs.github.com/en/developers/apps/creating-an-oauth-app).

Important things to fill out:

- Homepage URL: `http://localhost:3000`
- Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

Remember to copy the client id and client secret into the `.env` file.

## Author

Dane Miller

## License

This project is open source and available under the [MIT License](https://github.com/Danex2/petfinder/blob/main/LICENSE)

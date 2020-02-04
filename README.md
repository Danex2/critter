# FindMyPet

A tool to help pet owners in the GTA locate their missing pets.

## Stack

- React
- Express
- Node
- MongoDB

## Running Locally

1. Install dependencies: `npm run install:deps`
2. Create an `.env` file at the root of the project and add the following with the values filled in:

```javascript
TOKEN_SECRET=
GEOCODER_PROVIDER=
GEOCODER_API_KEY=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET=
MONGO_URI=
```

3. Start the mongoDB (if not installed then install from brew)
4. Start the backend and frontend:
   - Backend: `npm run watch`
   - Frontend: client -> `npm run start`

## Tests

Tests are located in the `tests` folder. Run them by doing `npm run test`.

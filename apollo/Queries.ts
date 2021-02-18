import { gql } from "@apollo/client";

export const USER_PET = gql`
  query GetUserPet($userId: Int!) {
    user(where: { id: $userId }) {
      pet {
        id
        name
        breed
        city
        address
        description
        phoneNumber
      }
    }
  }
`;

export const GET_CITIES = gql`
  query GetCites {
    cities {
      id
      name
    }
  }
`;

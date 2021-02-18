import { gql } from "@apollo/client";

export const UPDATE_PET = gql`
  mutation UpdateOnePet(
    $name: String!
    $description: String!
    $breed: String!
    $city: String!
    $address: String!
    $location: [Float!]
    $phoneNumber: String!
    $petId: String!
  ) {
    updateOnePet(
      where: { id: $petId }
      data: {
        name: { set: $name }
        description: { set: $description }
        breed: { set: $breed }
        city: { set: $city }
        phoneNumber: { set: $phoneNumber }
        address: { set: $address }
        location: { set: $location }
      }
    ) {
      id
    }
  }
`;

export const CREATE_PET = gql`
  mutation CreateOnePet(
    $name: String!
    $description: String!
    $breed: String!
    $city: String!
    $address: String!
    $location: [Float!]
    $phoneNumber: String!
    $id: Int!
  ) {
    createOnePet(
      data: {
        name: $name
        description: $description
        breed: $breed
        city: $city
        phoneNumber: $phoneNumber
        address: $address
        location: { set: $location }
        user: { connect: { id: $id } }
      }
    ) {
      id
    }
  }
`;

export const DELETE_PET = gql`
  mutation DeleteOnePet($petId: String!) {
    deleteOnePet(where: { id: $petId }) {
      id
    }
  }
`;

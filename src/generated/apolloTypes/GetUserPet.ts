/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserPet
// ====================================================

export interface GetUserPet_user_pet {
  __typename: "Pet";
  id: string;
  name: string;
  breed: string;
  city: string;
  address: string;
  description: string;
  phoneNumber: string;
}

export interface GetUserPet_user {
  __typename: "User";
  pet: GetUserPet_user_pet | null;
}

export interface GetUserPet {
  user: GetUserPet_user | null;
}

export interface GetUserPetVariables {
  userId: number;
}

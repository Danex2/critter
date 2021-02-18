/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateOnePet
// ====================================================

export interface UpdateOnePet_updateOnePet {
  __typename: "Pet";
  id: string;
}

export interface UpdateOnePet {
  updateOnePet: UpdateOnePet_updateOnePet | null;
}

export interface UpdateOnePetVariables {
  name: string;
  description: string;
  breed: string;
  city: string;
  address: string;
  location?: number[] | null;
  phoneNumber: string;
  petId: string;
}

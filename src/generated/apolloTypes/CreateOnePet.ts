/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateOnePet
// ====================================================

export interface CreateOnePet_createOnePet {
  __typename: "Pet";
  id: string;
}

export interface CreateOnePet {
  createOnePet: CreateOnePet_createOnePet;
}

export interface CreateOnePetVariables {
  name: string;
  description: string;
  breed: string;
  address: string;
  location?: number[] | null;
  phoneNumber: string;
  id: number;
}

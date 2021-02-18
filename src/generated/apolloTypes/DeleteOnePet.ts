/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteOnePet
// ====================================================

export interface DeleteOnePet_deleteOnePet {
  __typename: "Pet";
  id: string;
}

export interface DeleteOnePet {
  deleteOnePet: DeleteOnePet_deleteOnePet | null;
}

export interface DeleteOnePetVariables {
  petId: string;
}

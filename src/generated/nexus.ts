/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context as ctx } from "@prisma/client"


declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  DateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  DateTimeNullableFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null; // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  ImageCreateNestedManyWithoutPetInput: { // input type
    connect?: NexusGenInputs['ImageWhereUniqueInput'][] | null; // [ImageWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['ImageCreateOrConnectWithoutPetInput'][] | null; // [ImageCreateOrConnectWithoutPetInput!]
    create?: NexusGenInputs['ImageCreateWithoutPetInput'][] | null; // [ImageCreateWithoutPetInput!]
  }
  ImageCreateOrConnectWithoutPetInput: { // input type
    create: NexusGenInputs['ImageCreateWithoutPetInput']; // ImageCreateWithoutPetInput!
    where: NexusGenInputs['ImageWhereUniqueInput']; // ImageWhereUniqueInput!
  }
  ImageCreateWithoutPetInput: { // input type
    id?: string | null; // String
    url: string; // String!
  }
  ImageListRelationFilter: { // input type
    every?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    none?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
    some?: NexusGenInputs['ImageWhereInput'] | null; // ImageWhereInput
  }
  ImageScalarWhereInput: { // input type
    AND?: NexusGenInputs['ImageScalarWhereInput'][] | null; // [ImageScalarWhereInput!]
    NOT?: NexusGenInputs['ImageScalarWhereInput'][] | null; // [ImageScalarWhereInput!]
    OR?: NexusGenInputs['ImageScalarWhereInput'][] | null; // [ImageScalarWhereInput!]
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    petId?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    url?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  ImageUpdateManyMutationInput: { // input type
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    url?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
  }
  ImageUpdateManyWithWhereWithoutPetInput: { // input type
    data: NexusGenInputs['ImageUpdateManyMutationInput']; // ImageUpdateManyMutationInput!
    where: NexusGenInputs['ImageScalarWhereInput']; // ImageScalarWhereInput!
  }
  ImageUpdateManyWithoutPetInput: { // input type
    connect?: NexusGenInputs['ImageWhereUniqueInput'][] | null; // [ImageWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['ImageCreateOrConnectWithoutPetInput'][] | null; // [ImageCreateOrConnectWithoutPetInput!]
    create?: NexusGenInputs['ImageCreateWithoutPetInput'][] | null; // [ImageCreateWithoutPetInput!]
    delete?: NexusGenInputs['ImageWhereUniqueInput'][] | null; // [ImageWhereUniqueInput!]
    deleteMany?: NexusGenInputs['ImageScalarWhereInput'][] | null; // [ImageScalarWhereInput!]
    disconnect?: NexusGenInputs['ImageWhereUniqueInput'][] | null; // [ImageWhereUniqueInput!]
    set?: NexusGenInputs['ImageWhereUniqueInput'][] | null; // [ImageWhereUniqueInput!]
    update?: NexusGenInputs['ImageUpdateWithWhereUniqueWithoutPetInput'][] | null; // [ImageUpdateWithWhereUniqueWithoutPetInput!]
    updateMany?: NexusGenInputs['ImageUpdateManyWithWhereWithoutPetInput'][] | null; // [ImageUpdateManyWithWhereWithoutPetInput!]
    upsert?: NexusGenInputs['ImageUpsertWithWhereUniqueWithoutPetInput'][] | null; // [ImageUpsertWithWhereUniqueWithoutPetInput!]
  }
  ImageUpdateWithWhereUniqueWithoutPetInput: { // input type
    data: NexusGenInputs['ImageUpdateWithoutPetInput']; // ImageUpdateWithoutPetInput!
    where: NexusGenInputs['ImageWhereUniqueInput']; // ImageWhereUniqueInput!
  }
  ImageUpdateWithoutPetInput: { // input type
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    url?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
  }
  ImageUpsertWithWhereUniqueWithoutPetInput: { // input type
    create: NexusGenInputs['ImageCreateWithoutPetInput']; // ImageCreateWithoutPetInput!
    update: NexusGenInputs['ImageUpdateWithoutPetInput']; // ImageUpdateWithoutPetInput!
    where: NexusGenInputs['ImageWhereUniqueInput']; // ImageWhereUniqueInput!
  }
  ImageWhereInput: { // input type
    AND?: NexusGenInputs['ImageWhereInput'][] | null; // [ImageWhereInput!]
    NOT?: NexusGenInputs['ImageWhereInput'][] | null; // [ImageWhereInput!]
    OR?: NexusGenInputs['ImageWhereInput'][] | null; // [ImageWhereInput!]
    Pet?: NexusGenInputs['PetWhereInput'] | null; // PetWhereInput
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    petId?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    url?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  ImageWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedDateTimeNullableFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null; // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NestedStringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  NullableDateTimeFieldUpdateOperationsInput: { // input type
    set?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  NullableStringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  PetCreateInput: { // input type
    breed: string; // String!
    city: string; // String!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description: string; // String!
    id?: string | null; // String
    images?: NexusGenInputs['ImageCreateNestedManyWithoutPetInput'] | null; // ImageCreateNestedManyWithoutPetInput
    name: string; // String!
    phoneNumber: string; // String!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    user: NexusGenInputs['UserCreateNestedOneWithoutPetInput']; // UserCreateNestedOneWithoutPetInput!
  }
  PetOrderByInput: { // input type
    breed?: NexusGenEnums['SortOrder'] | null; // SortOrder
    city?: NexusGenEnums['SortOrder'] | null; // SortOrder
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    description?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    phoneNumber?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    user?: NexusGenInputs['UserOrderByInput'] | null; // UserOrderByInput
    userId?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  PetUpdateInput: { // input type
    breed?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    city?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    description?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    id?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    images?: NexusGenInputs['ImageUpdateManyWithoutPetInput'] | null; // ImageUpdateManyWithoutPetInput
    name?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    phoneNumber?: NexusGenInputs['StringFieldUpdateOperationsInput'] | null; // StringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    user?: NexusGenInputs['UserUpdateOneRequiredWithoutPetInput'] | null; // UserUpdateOneRequiredWithoutPetInput
  }
  PetWhereInput: { // input type
    AND?: NexusGenInputs['PetWhereInput'][] | null; // [PetWhereInput!]
    NOT?: NexusGenInputs['PetWhereInput'][] | null; // [PetWhereInput!]
    OR?: NexusGenInputs['PetWhereInput'][] | null; // [PetWhereInput!]
    breed?: NexusGenInputs['StringFilter'] | null; // StringFilter
    city?: NexusGenInputs['StringFilter'] | null; // StringFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    description?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    images?: NexusGenInputs['ImageListRelationFilter'] | null; // ImageListRelationFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    phoneNumber?: NexusGenInputs['StringFilter'] | null; // StringFilter
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    user?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    userId?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  PetWhereUniqueInput: { // input type
    id?: string | null; // String
  }
  StringFieldUpdateOperationsInput: { // input type
    set?: string | null; // String
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  StringNullableFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    mode?: NexusGenEnums['QueryMode'] | null; // QueryMode
    not?: NexusGenInputs['NestedStringNullableFilter'] | null; // NestedStringNullableFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserCreateNestedOneWithoutPetInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    connectOrCreate?: NexusGenInputs['UserCreateOrConnectWithoutpetInput'] | null; // UserCreateOrConnectWithoutpetInput
    create?: NexusGenInputs['UserCreateWithoutPetInput'] | null; // UserCreateWithoutPetInput
  }
  UserCreateOrConnectWithoutpetInput: { // input type
    create: NexusGenInputs['UserCreateWithoutPetInput']; // UserCreateWithoutPetInput!
    where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
  }
  UserCreateWithoutPetInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email?: string | null; // String
    emailVerified?: NexusGenScalars['DateTime'] | null; // DateTime
    image?: string | null; // String
    name?: string | null; // String
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
  }
  UserOrderByInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    email?: NexusGenEnums['SortOrder'] | null; // SortOrder
    emailVerified?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    image?: NexusGenEnums['SortOrder'] | null; // SortOrder
    name?: NexusGenEnums['SortOrder'] | null; // SortOrder
    updatedAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  UserUpdateOneRequiredWithoutPetInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    connectOrCreate?: NexusGenInputs['UserCreateOrConnectWithoutpetInput'] | null; // UserCreateOrConnectWithoutpetInput
    create?: NexusGenInputs['UserCreateWithoutPetInput'] | null; // UserCreateWithoutPetInput
    update?: NexusGenInputs['UserUpdateWithoutPetInput'] | null; // UserUpdateWithoutPetInput
    upsert?: NexusGenInputs['UserUpsertWithoutPetInput'] | null; // UserUpsertWithoutPetInput
  }
  UserUpdateWithoutPetInput: { // input type
    createdAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
    email?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    emailVerified?: NexusGenInputs['NullableDateTimeFieldUpdateOperationsInput'] | null; // NullableDateTimeFieldUpdateOperationsInput
    image?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    name?: NexusGenInputs['NullableStringFieldUpdateOperationsInput'] | null; // NullableStringFieldUpdateOperationsInput
    updatedAt?: NexusGenInputs['DateTimeFieldUpdateOperationsInput'] | null; // DateTimeFieldUpdateOperationsInput
  }
  UserUpsertWithoutPetInput: { // input type
    create: NexusGenInputs['UserCreateWithoutPetInput']; // UserCreateWithoutPetInput!
    update: NexusGenInputs['UserUpdateWithoutPetInput']; // UserUpdateWithoutPetInput!
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    email?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    emailVerified?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    image?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    name?: NexusGenInputs['StringNullableFilter'] | null; // StringNullableFilter
    pet?: NexusGenInputs['PetWhereInput'] | null; // PetWhereInput
    updatedAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
  QueryMode: "default" | "insensitive"
  SortOrder: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Image: { // root type
    id: string; // String!
    url: string; // String!
  }
  Mutation: {};
  Pet: { // root type
    breed: string; // String!
    city: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: string; // String!
    name: string; // String!
    phoneNumber: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Query: {};
  User: { // root type
    email?: string | null; // String
    id: number; // Int!
    name?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Image: { // field return type
    Pet: NexusGenRootTypes['Pet'] | null; // Pet
    id: string; // String!
    url: string; // String!
  }
  Mutation: { // field return type
    createOnePet: NexusGenRootTypes['Pet']; // Pet!
    deleteOnePet: NexusGenRootTypes['Pet'] | null; // Pet
    updateOnePet: NexusGenRootTypes['Pet'] | null; // Pet
  }
  Pet: { // field return type
    breed: string; // String!
    city: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    id: string; // String!
    images: NexusGenRootTypes['Image'][]; // [Image!]!
    name: string; // String!
    phoneNumber: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    user: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    pets: NexusGenRootTypes['Pet'][]; // [Pet!]!
  }
  User: { // field return type
    email: string | null; // String
    id: number; // Int!
    name: string | null; // String
    pet: NexusGenRootTypes['Pet'] | null; // Pet
  }
}

export interface NexusGenFieldTypeNames {
  Image: { // field return type name
    Pet: 'Pet'
    id: 'String'
    url: 'String'
  }
  Mutation: { // field return type name
    createOnePet: 'Pet'
    deleteOnePet: 'Pet'
    updateOnePet: 'Pet'
  }
  Pet: { // field return type name
    breed: 'String'
    city: 'String'
    createdAt: 'DateTime'
    description: 'String'
    id: 'String'
    images: 'Image'
    name: 'String'
    phoneNumber: 'String'
    updatedAt: 'DateTime'
    user: 'User'
  }
  Query: { // field return type name
    pets: 'Pet'
  }
  User: { // field return type name
    email: 'String'
    id: 'Int'
    name: 'String'
    pet: 'Pet'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOnePet: { // args
      data: NexusGenInputs['PetCreateInput']; // PetCreateInput!
    }
    deleteOnePet: { // args
      where: NexusGenInputs['PetWhereUniqueInput']; // PetWhereUniqueInput!
    }
    updateOnePet: { // args
      data: NexusGenInputs['PetUpdateInput']; // PetUpdateInput!
      where: NexusGenInputs['PetWhereUniqueInput']; // PetWhereUniqueInput!
    }
  }
  Pet: {
    images: { // args
      after?: NexusGenInputs['ImageWhereUniqueInput'] | null; // ImageWhereUniqueInput
      before?: NexusGenInputs['ImageWhereUniqueInput'] | null; // ImageWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Query: {
    pets: { // args
      after?: NexusGenInputs['PetWhereUniqueInput'] | null; // PetWhereUniqueInput
      before?: NexusGenInputs['PetWhereUniqueInput'] | null; // PetWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['PetOrderByInput'][] | null; // [PetOrderByInput!]
      where?: NexusGenInputs['PetWhereInput'] | null; // PetWhereInput
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: ctx;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}
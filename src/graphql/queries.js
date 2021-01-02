/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVaccineHistory = /* GraphQL */ `
  query GetVaccineHistory($id: ID!) {
    getVaccineHistory(id: $id) {
      id
      vaccineName
      dateAdministered
      medicalRepName
      vaccineFlag
      vaccineID
      createdAt
      updatedAt
    }
  }
`;
export const listVaccineHistorys = /* GraphQL */ `
  query ListVaccineHistorys(
    $filter: ModelVaccineHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVaccineHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        vaccineName
        dateAdministered
        medicalRepName
        vaccineFlag
        vaccineID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVaccine = /* GraphQL */ `
  query GetVaccine($id: ID!) {
    getVaccine(id: $id) {
      id
      vaccineName
      vaccineDosage
      vaccineFrequecy
      infantID
      createdAt
      updatedAt
      VaccineHistories {
        nextToken
      }
    }
  }
`;
export const listVaccines = /* GraphQL */ `
  query ListVaccines(
    $filter: ModelVaccineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVaccines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        vaccineName
        vaccineDosage
        vaccineFrequecy
        infantID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInfant = /* GraphQL */ `
  query GetInfant($id: ID!) {
    getInfant(id: $id) {
      id
      firstName
      lastName
      dateOfBirth
      gender
      parentID
      createdAt
      updatedAt
      Vaccines {
        nextToken
      }
    }
  }
`;
export const listInfants = /* GraphQL */ `
  query ListInfants(
    $filter: ModelInfantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInfants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        dateOfBirth
        gender
        parentID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getParent = /* GraphQL */ `
  query GetParent($id: ID!) {
    getParent(id: $id) {
      id
      firstName
      lastName
      idNumber
      dateOfBirtth
      contactNumber
      emailAddress
      physicalAddress
      titleField
      noOfInfants
      medicalrepID
      createdAt
      updatedAt
      Infants {
        nextToken
      }
    }
  }
`;
export const listParents = /* GraphQL */ `
  query ListParents(
    $filter: ModelParentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        idNumber
        dateOfBirtth
        contactNumber
        emailAddress
        physicalAddress
        titleField
        noOfInfants
        medicalrepID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMedicalRep = /* GraphQL */ `
  query GetMedicalRep($id: ID!) {
    getMedicalRep(id: $id) {
      id
      firstName
      lastName
      practiseNumber
      practiseName
      idNumber
      dateOfBirth
      physicalAddress
      contactNumber
      emailAddress
      titleField
      createdAt
      updatedAt
      Parents {
        nextToken
      }
    }
  }
`;
export const listMedicalReps = /* GraphQL */ `
  query ListMedicalReps(
    $filter: ModelMedicalRepFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedicalReps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        practiseNumber
        practiseName
        idNumber
        dateOfBirth
        physicalAddress
        contactNumber
        emailAddress
        titleField
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

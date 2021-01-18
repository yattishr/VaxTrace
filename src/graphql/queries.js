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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVaccineHistories = /* GraphQL */ `
  query SyncVaccineHistories(
    $filter: ModelVaccineHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVaccineHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        vaccineName
        dateAdministered
        medicalRepName
        vaccineFlag
        vaccineID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      VaccineHistories {
        nextToken
        startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVaccines = /* GraphQL */ `
  query SyncVaccines(
    $filter: ModelVaccineFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVaccines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        vaccineName
        vaccineDosage
        vaccineFrequecy
        infantID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Vaccines {
        nextToken
        startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInfants = /* GraphQL */ `
  query SyncInfants(
    $filter: ModelInfantFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInfants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        dateOfBirth
        gender
        parentID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Infants {
        nextToken
        startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncParents = /* GraphQL */ `
  query SyncParents(
    $filter: ModelParentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncParents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Parents {
        nextToken
        startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMedicalReps = /* GraphQL */ `
  query SyncMedicalReps(
    $filter: ModelMedicalRepFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMedicalReps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;

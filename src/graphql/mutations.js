/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVaccineHistory = /* GraphQL */ `
  mutation CreateVaccineHistory(
    $input: CreateVaccineHistoryInput!
    $condition: ModelVaccineHistoryConditionInput
  ) {
    createVaccineHistory(input: $input, condition: $condition) {
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
export const updateVaccineHistory = /* GraphQL */ `
  mutation UpdateVaccineHistory(
    $input: UpdateVaccineHistoryInput!
    $condition: ModelVaccineHistoryConditionInput
  ) {
    updateVaccineHistory(input: $input, condition: $condition) {
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
export const deleteVaccineHistory = /* GraphQL */ `
  mutation DeleteVaccineHistory(
    $input: DeleteVaccineHistoryInput!
    $condition: ModelVaccineHistoryConditionInput
  ) {
    deleteVaccineHistory(input: $input, condition: $condition) {
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
export const createVaccine = /* GraphQL */ `
  mutation CreateVaccine(
    $input: CreateVaccineInput!
    $condition: ModelVaccineConditionInput
  ) {
    createVaccine(input: $input, condition: $condition) {
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
export const updateVaccine = /* GraphQL */ `
  mutation UpdateVaccine(
    $input: UpdateVaccineInput!
    $condition: ModelVaccineConditionInput
  ) {
    updateVaccine(input: $input, condition: $condition) {
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
export const deleteVaccine = /* GraphQL */ `
  mutation DeleteVaccine(
    $input: DeleteVaccineInput!
    $condition: ModelVaccineConditionInput
  ) {
    deleteVaccine(input: $input, condition: $condition) {
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
export const createInfant = /* GraphQL */ `
  mutation CreateInfant(
    $input: CreateInfantInput!
    $condition: ModelInfantConditionInput
  ) {
    createInfant(input: $input, condition: $condition) {
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
export const updateInfant = /* GraphQL */ `
  mutation UpdateInfant(
    $input: UpdateInfantInput!
    $condition: ModelInfantConditionInput
  ) {
    updateInfant(input: $input, condition: $condition) {
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
export const deleteInfant = /* GraphQL */ `
  mutation DeleteInfant(
    $input: DeleteInfantInput!
    $condition: ModelInfantConditionInput
  ) {
    deleteInfant(input: $input, condition: $condition) {
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
export const createParent = /* GraphQL */ `
  mutation CreateParent(
    $input: CreateParentInput!
    $condition: ModelParentConditionInput
  ) {
    createParent(input: $input, condition: $condition) {
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
export const updateParent = /* GraphQL */ `
  mutation UpdateParent(
    $input: UpdateParentInput!
    $condition: ModelParentConditionInput
  ) {
    updateParent(input: $input, condition: $condition) {
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
export const deleteParent = /* GraphQL */ `
  mutation DeleteParent(
    $input: DeleteParentInput!
    $condition: ModelParentConditionInput
  ) {
    deleteParent(input: $input, condition: $condition) {
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
export const createMedicalRep = /* GraphQL */ `
  mutation CreateMedicalRep(
    $input: CreateMedicalRepInput!
    $condition: ModelMedicalRepConditionInput
  ) {
    createMedicalRep(input: $input, condition: $condition) {
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
export const updateMedicalRep = /* GraphQL */ `
  mutation UpdateMedicalRep(
    $input: UpdateMedicalRepInput!
    $condition: ModelMedicalRepConditionInput
  ) {
    updateMedicalRep(input: $input, condition: $condition) {
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
export const deleteMedicalRep = /* GraphQL */ `
  mutation DeleteMedicalRep(
    $input: DeleteMedicalRepInput!
    $condition: ModelMedicalRepConditionInput
  ) {
    deleteMedicalRep(input: $input, condition: $condition) {
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

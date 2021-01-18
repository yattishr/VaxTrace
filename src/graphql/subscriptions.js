/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVaccineHistory = /* GraphQL */ `
  subscription OnCreateVaccineHistory {
    onCreateVaccineHistory {
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
export const onUpdateVaccineHistory = /* GraphQL */ `
  subscription OnUpdateVaccineHistory {
    onUpdateVaccineHistory {
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
export const onDeleteVaccineHistory = /* GraphQL */ `
  subscription OnDeleteVaccineHistory {
    onDeleteVaccineHistory {
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
export const onCreateVaccine = /* GraphQL */ `
  subscription OnCreateVaccine {
    onCreateVaccine {
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
export const onUpdateVaccine = /* GraphQL */ `
  subscription OnUpdateVaccine {
    onUpdateVaccine {
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
export const onDeleteVaccine = /* GraphQL */ `
  subscription OnDeleteVaccine {
    onDeleteVaccine {
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
export const onCreateInfant = /* GraphQL */ `
  subscription OnCreateInfant {
    onCreateInfant {
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
export const onUpdateInfant = /* GraphQL */ `
  subscription OnUpdateInfant {
    onUpdateInfant {
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
export const onDeleteInfant = /* GraphQL */ `
  subscription OnDeleteInfant {
    onDeleteInfant {
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
export const onCreateParent = /* GraphQL */ `
  subscription OnCreateParent {
    onCreateParent {
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
export const onUpdateParent = /* GraphQL */ `
  subscription OnUpdateParent {
    onUpdateParent {
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
export const onDeleteParent = /* GraphQL */ `
  subscription OnDeleteParent {
    onDeleteParent {
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
export const onCreateMedicalRep = /* GraphQL */ `
  subscription OnCreateMedicalRep {
    onCreateMedicalRep {
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
export const onUpdateMedicalRep = /* GraphQL */ `
  subscription OnUpdateMedicalRep {
    onUpdateMedicalRep {
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
export const onDeleteMedicalRep = /* GraphQL */ `
  subscription OnDeleteMedicalRep {
    onDeleteMedicalRep {
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

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
      createdAt
      updatedAt
      VaccineHistories {
        nextToken
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
      createdAt
      updatedAt
      VaccineHistories {
        nextToken
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
      createdAt
      updatedAt
      VaccineHistories {
        nextToken
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
      createdAt
      updatedAt
      Vaccines {
        nextToken
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
      createdAt
      updatedAt
      Vaccines {
        nextToken
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
      createdAt
      updatedAt
      Vaccines {
        nextToken
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
      createdAt
      updatedAt
      Infants {
        nextToken
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
      createdAt
      updatedAt
      Infants {
        nextToken
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
      createdAt
      updatedAt
      Infants {
        nextToken
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
      createdAt
      updatedAt
      Parents {
        nextToken
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
      createdAt
      updatedAt
      Parents {
        nextToken
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
      createdAt
      updatedAt
      Parents {
        nextToken
      }
    }
  }
`;

import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class ParentTable {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly titleField?: string;
  readonly noOfInfants?: number;
  readonly emailAddress?: string;
  readonly contactNumber?: string;
  readonly idNumber?: string;
  readonly dateOfBirtth?: string;
  readonly physicalAdress?: string;
  readonly infantArray?: (string | null)[];
  readonly medicalRepId?: string;
  readonly totalPoints?: number;
  readonly totalPointsAccrued?: number;
  constructor(init: ModelInit<ParentTable>);
  static copyOf(source: ParentTable, mutator: (draft: MutableModel<ParentTable>) => MutableModel<ParentTable> | void): ParentTable;
}

export declare class VaccineHistory {
  readonly id: string;
  readonly vaccineName?: string;
  readonly dateAdministered?: string;
  readonly medicalRepName?: string;
  readonly vaccineFlag?: boolean;
  readonly vaccineID: string;
  constructor(init: ModelInit<VaccineHistory>);
  static copyOf(source: VaccineHistory, mutator: (draft: MutableModel<VaccineHistory>) => MutableModel<VaccineHistory> | void): VaccineHistory;
}

export declare class Vaccine {
  readonly id: string;
  readonly vaccineName?: string;
  readonly vaccineDosage?: string;
  readonly vaccineFrequecy?: string;
  readonly infantID: string;
  readonly VaccineHistories?: (VaccineHistory | null)[];
  constructor(init: ModelInit<Vaccine>);
  static copyOf(source: Vaccine, mutator: (draft: MutableModel<Vaccine>) => MutableModel<Vaccine> | void): Vaccine;
}

export declare class Infant {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly dateOfBirth?: string;
  readonly gender?: string;
  readonly parentID: string;
  readonly Vaccines?: (Vaccine | null)[];
  readonly pointsAccrued?: number;
  readonly pointsTotal?: number;
  readonly age?: number;
  readonly height?: number;
  readonly weight?: number;
  constructor(init: ModelInit<Infant>);
  static copyOf(source: Infant, mutator: (draft: MutableModel<Infant>) => MutableModel<Infant> | void): Infant;
}

export declare class MedicalRep {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly practiseNumber?: string;
  readonly practiseName?: string;
  readonly idNumber?: string;
  readonly dateOfBirth?: string;
  readonly physicalAddress?: string;
  readonly contactNumber?: string;
  readonly emailAddress?: string;
  readonly titleField?: string;
  constructor(init: ModelInit<MedicalRep>);
  static copyOf(source: MedicalRep, mutator: (draft: MutableModel<MedicalRep>) => MutableModel<MedicalRep> | void): MedicalRep;
}
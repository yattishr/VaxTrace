// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ParentTable, VaccineHistory, Vaccine, Infant, Parent, MedicalRep } = initSchema(schema);

export {
  ParentTable,
  VaccineHistory,
  Vaccine,
  Infant,
  Parent,
  MedicalRep
};
// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { VaccineHistory, Vaccine, Infant, Parent, MedicalRep } = initSchema(schema);

export {
  VaccineHistory,
  Vaccine,
  Infant,
  Parent,
  MedicalRep
};
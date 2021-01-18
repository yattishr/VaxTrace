// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
import { schema } from './schema';



const { VaccineHistory, Vaccine, Infant, Parent, MedicalRep } = initSchema(schema);

export {
  ParentTable,
  VaccineHistory,
  Vaccine,
  Infant,
  Parent,
  MedicalRep
};

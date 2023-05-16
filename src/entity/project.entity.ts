import { EntityType, WarmupTable } from '@libs/const';
import { getEntityPrefix } from '@libs/utils';
import { Entity } from 'dynamodb-toolbox';


export const ProjectEntity = new Entity({
  // Specify entity name
  name: EntityType[EntityType.PROJECT],

  // Define attributes
  attributes: {
    project: { partitionKey: true, prefix : getEntityPrefix(EntityType[EntityType.PROJECT]) }, // flag as partitionKey
    functionality: { sortKey: true }, // flag as sortKey and mark hidden
    projectName: { type: 'string', required: true }, 
    page: { type: 'string', required: true }, 
    url: { type: 'string', required: true }, 
    concurrency: { type: 'number' }, 
  },

  // Assign it to our table
  table: WarmupTable

  // In Typescript, the "as const" statement is needed for type inference
} as const)
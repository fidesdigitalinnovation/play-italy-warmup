import DynamoDB from 'aws-sdk/clients/dynamodb'
import { Table} from 'dynamodb-toolbox'

const DocumentClient = new DynamoDB.DocumentClient({
  // Specify your client options as usual
  convertEmptyValues: false
})

const { WARMUP_SINGLE_TABLE } = process.env

// Instantiate a table
export const WarmupTable = new Table({
  // Specify table name (used by DynamoDB)
  name: WARMUP_SINGLE_TABLE,

  // Define partition and sort keys
  partitionKey: 'pk',
  sortKey: 'sk',

  // Add the DocumentClient
  DocumentClient
})

export enum EntityType {
    PROJECT,
  }
  
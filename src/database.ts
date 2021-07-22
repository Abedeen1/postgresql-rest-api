import { Pool } from 'pg'
//import { database } from './config';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'postgres',
  database: 'db1',
  port: 5432
})

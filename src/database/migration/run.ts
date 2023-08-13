import fs from 'fs';
import { openDb } from '../connection';

// Read and execute the SQL query in ./sql/articles.sql
// openDb.exec(fs.readFileSync(__dirname + '/sql/articles.sql').toString());
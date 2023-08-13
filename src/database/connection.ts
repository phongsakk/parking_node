import path from 'path';
import { Database } from "sqlite3";

const db = new Database(path.resolve('./database.sqlite'));

export default db;
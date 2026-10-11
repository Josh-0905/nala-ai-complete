import { DatabaseSync } from 'node:sqlite';
import path from 'path';
import fs from 'fs';

function normalizeValue(val: any): any {
  if (val === undefined) return null;
  if (typeof val === 'boolean') return val ? 1 : 0;
  if (val instanceof Date) return val.toISOString();
  return val;
}

function normalizeArgs(args: any[]): any[] {
  if (args.length === 1 && Array.isArray(args[0])) {
    return args[0].map(normalizeValue);
  }
  return args.map(normalizeValue);
}

export interface StatementWrapper {
  run(...args: any[]): { changes: number | bigint; lastInsertRowid: number | bigint };
  get(...args: any[]): any;
  all(...args: any[]): any[];
}

export class SQLiteWrapper {
  private rawDb: DatabaseSync;

  constructor(dbPath: string) {
    this.rawDb = new DatabaseSync(dbPath);
  }

  pragma(pragmaStr: string): void {
    try {
      this.rawDb.exec(`PRAGMA ${pragmaStr}`);
    } catch {
      // pragma setting
    }
  }

  exec(sql: string): void {
    this.rawDb.exec(sql);
  }

  prepare(sql: string): StatementWrapper {
    const stmt = this.rawDb.prepare(sql);
    return {
      run: (...args: any[]) => stmt.run(...normalizeArgs(args)),
      get: (...args: any[]) => stmt.get(...normalizeArgs(args)),
      all: (...args: any[]) => stmt.all(...normalizeArgs(args)),
    };
  }

  transaction<T extends (...args: any[]) => any>(fn: T): T {
    return ((...args: any[]) => {
      this.rawDb.exec('BEGIN IMMEDIATE');
      try {
        const result = fn(...args);
        this.rawDb.exec('COMMIT');
        return result;
      } catch (err) {
        this.rawDb.exec('ROLLBACK');
        throw err;
      }
    }) as T;
  }
}

const dbPath = path.resolve(process.cwd(), 'nala.db');
const schemaPath = path.resolve(process.cwd(), 'src/database/schema.sql');

export const db = new SQLiteWrapper(dbPath);

// Enable WAL mode for performance & concurrent reads
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

export function initDatabase(): void {
  try {
    let schemaSql = '';
    if (fs.existsSync(schemaPath)) {
      schemaSql = fs.readFileSync(schemaPath, 'utf8');
    } else {
      // In dist build, schema might be in dist/database/schema.sql or root
      const fallbackPath = path.resolve(__dirname, 'schema.sql');
      if (fs.existsSync(fallbackPath)) {
        schemaSql = fs.readFileSync(fallbackPath, 'utf8');
      } else {
        const rootSchema = path.resolve(process.cwd(), 'dist/database/schema.sql');
        schemaSql = fs.readFileSync(rootSchema, 'utf8');
      }
    }
    db.exec(schemaSql);
    console.log('✓ SQLite database initialized successfully at', dbPath);
  } catch (err) {
    console.error('Database initialization note/error:', err);
  }
}

import { DatabaseSync } from 'node:sqlite';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'server', 'nala.db');
const db = new DatabaseSync(dbPath);
const r = db.prepare("SELECT * FROM recipes WHERE name LIKE '%Baba Ganoush%'").get();
console.log('Recipe:', r.name);
const ings = db.prepare("SELECT * FROM recipe_ingredients WHERE recipe_id = ?").all(r.id);
console.log('Ingredients:', ings);

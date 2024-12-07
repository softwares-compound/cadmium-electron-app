import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const DB_PATH = path.resolve(__dirname, '../../../db/cadmium.db');

// Ensure the database directory exists
function ensureDBDirectoryExists() {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Open the SQLite database
export function openDB() {
    ensureDBDirectoryExists();
    return new Database(DB_PATH, { verbose: console.log }); // `verbose` logs all queries
}

// Initialize the database and create the table
export function initializeDB() {
    try {
        const db = openDB();
        db.exec(`
            CREATE TABLE IF NOT EXISTS organization_detail (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              cd_id TEXT NOT NULL UNIQUE,
              cd_secret TEXT NOT NULL UNIQUE,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Database initialized.');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

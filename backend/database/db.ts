import SQLite from 'better-sqlite3'
export const db = new SQLite('./backend/database/notes.db')
db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
        note_id INTEGER PRIMARY KEY AUTOINCREMENT,
        text VARCHAR NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`)

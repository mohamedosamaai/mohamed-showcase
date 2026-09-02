# 💾 Database Schema & Persistence

The platform utilizes SQLite3 via `better-sqlite3` with Write-Ahead Logging (WAL) mode for lightweight, low-latency, zero-leak database operations.

---

## 1. Schema Definition

```sql
-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  slug           TEXT    NOT NULL UNIQUE,
  status         TEXT    NOT NULL DEFAULT 'dev' CHECK(status IN ('live','client','dev')),
  title_en       TEXT    NOT NULL,
  title_ar       TEXT    NOT NULL,
  tagline_en     TEXT    NOT NULL DEFAULT '',
  tagline_ar     TEXT    NOT NULL DEFAULT '',
  description_en TEXT    NOT NULL DEFAULT '',
  description_ar TEXT    NOT NULL DEFAULT '',
  tags           TEXT    NOT NULL DEFAULT '[]',
  stack          TEXT    NOT NULL DEFAULT '[]',
  url            TEXT,
  repo           TEXT,
  image          TEXT,
  featured       INTEGER NOT NULL DEFAULT 0,
  sort_order     INTEGER NOT NULL DEFAULT 0,
  highlights     TEXT    NOT NULL DEFAULT '[]',
  sections       TEXT    NOT NULL DEFAULT '[]',
  created_at     TEXT    NOT NULL DEFAULT (datetime('now'))
);

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS posts (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  slug           TEXT    NOT NULL UNIQUE,
  title_en       TEXT    NOT NULL,
  title_ar       TEXT    NOT NULL,
  excerpt_en     TEXT    NOT NULL DEFAULT '',
  excerpt_ar     TEXT    NOT NULL DEFAULT '',
  content_en     TEXT    NOT NULL DEFAULT '',
  content_ar     TEXT    NOT NULL DEFAULT '',
  tags           TEXT    NOT NULL DEFAULT '[]',
  published      INTEGER NOT NULL DEFAULT 0,
  created_at     TEXT    NOT NULL DEFAULT (datetime('now'))
);

-- Inbound Leads Table
CREATE TABLE IF NOT EXISTS leads (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  name           TEXT NOT NULL,
  email          TEXT NOT NULL,
  budget         TEXT,
  timeline       TEXT,
  service        TEXT,
  message        TEXT NOT NULL,
  source         TEXT NOT NULL DEFAULT 'contact-form',
  created_at     TEXT NOT NULL DEFAULT (datetime('now'))
);
```

---

## 2. Parameterized Query Guarantee
All database queries MUST use prepared statements:
```typescript
const stmt = db.prepare('SELECT * FROM posts WHERE slug = ? AND published = 1');
const post = stmt.get(slug);
```

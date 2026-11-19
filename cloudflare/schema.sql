CREATE TABLE IF NOT EXISTS checkins (
  id INTEGER PRIMARY KEY,
  mood TEXT NOT NULL,
  support TEXT NOT NULL,
  note TEXT NOT NULL,
  reply TEXT,
  browser_hash TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS checkins_browser ON checkins (browser_hash, id DESC);
CREATE TABLE IF NOT EXISTS subscriptions (
  browser_hash TEXT PRIMARY KEY,
  endpoint TEXT NOT NULL
);

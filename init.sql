CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    pass TEXT NOT NULL  
);

INSERT INTO users (name,pass)VALUES
('admin','admin'),
('user0','user0');

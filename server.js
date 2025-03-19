const express = require('express');
const betterSqlite3 = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const port = 3000;
const app = express();

const db = betterSqlite3('database.db');

console.log("Directorio:", __dirname);

// Obtenemos la ruta absoluta a init.sql
const initSqlPath = path.join(__dirname, 'init.sql');

// Leemos y ejecutamos el contenido de init.sql
const initSql = fs.readFileSync(initSqlPath, 'utf8');
db.exec(initSql); 

// Corrección: preparamos y ejecutamos correctamente la consulta
const query = db.prepare("SELECT * FROM users");
const users = query.all();
console.log(users[0].name);

app.get("/", (req, res) => {
    res.send("Hola mundo");
});

app.get("/users", (req, res) => {
    const query = db.prepare("SELECT * FROM users");
    const users = query.all();
    res.json(users);
})
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const query = db.prepare("SELECT id, name FROM users WHERE id = ?");
    const users = query.all(1)
    res.json(users);
})

app.post("/users",(req,res) => {
    const name = req.body.name;
    const pass = req.body.pass;
    const query = db.prepare("INSERT INTO users (name,pass) VALUES (?; ?)");
    query.run(name,pass);
    res.json("Usuario creado");
})


app.listen(port, () => {
    console.log("Servidor funcionando en el puerto 3000");
});

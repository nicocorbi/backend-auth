const express = require('express');
const betterSqlite3 = require('better-sqlite3');
const fs = require('fs');
const path = require('path');
//necesitamos una ruta absoluta para ello necesitaremos el path
const port = 3000;
const app = express();

const db = betterSqlite3('database.db')

console.log("Directorio:", __dirname);
//obtenemos la ruta absoluta a init.sql
const initSqlPath = path.join(__dirname,'init.sql');
//leemos el archivo init.sql
const initSql = fs.readFileSync(initSqlPath,'utf8');
//ejecutamos el contenido de init.sql
db.exec(initSql);
app.get("/",(req,res)=>{
    res.send("Hola mundo")
})

app.listen(port, () => {
    console.log("servidor funcionando en el puerto 3000")
})
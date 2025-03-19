# Backend autenticacion usuarios

## inicializar el repositorio

1. Hemos creado la carpeta
2. Iniciamos y subimos los primeros archivps al repositorio local

```bash
git init
git add .
git commit -m "build"
```
3. crear el repositorio remoto en Github
```bash
gh repo create
```

## Crear el proyecto de npm

1. para arrancar el proyecto npm:

```bash
npm init -y
```
2. descargamos las dependencias
```bash
npm install express
npm i express
```

3. Creamos un .gitignore

## Crear servidor
1. creamos un hola mundo
2. Añadimos `better-sqlite3`
3. Lo integramos en nuestro server
```js
// conectar a la base de datos
const db = betterSqlite3('database.db')

console.log("Directorio:", __dirname);
//obtenemos la ruta absoluta a init.sql
const initSqlPath = path.join(__dirname,'init.sql');
//leemos el archivo init.sql
const initSql = fs.readFileSync(initSqlPath,'utf8');
//ejecutamos el contenido de init.sql
db.exec(initSql);
// exec solo funciona para comandos que no devuelven datos

// para consultas que SI devuelven datos usamos prepare
// y luego lo ejecutamos con .all o .get(<numero>)
const query = db.prepare(db.exec('SELECT * FROM users'));
const users = query.all();
console.log(users);
```

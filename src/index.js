import express  from "express";
import ejs from 'ejs';
import {dirname, join} from 'path';
import { fileURLToPath } from "url";
import indexRoutes from './routes/index.js'

//Instancia del servidor
const app = express()

//Ruta absoluta 
const __dirname = dirname(fileURLToPath(import.meta.url))

//Configuraciones de express
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs') //Activa el poder escribir codigo en html

//Usamos la carpeta de las Rutas
app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))


app.listen(3000) 
console.log('Server on PORT 3000')
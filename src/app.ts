import express, { Application } from 'express'
import createError from 'http-errors'

//Morgan es un middleware para ver las peticiones del servidor por consola
import morgan from 'morgan'

//Conexion a la base de datos
import { connect } from './database';

//importacion de ruta desde index.routes
import Routes from './routes/index.routes'
import { handleError } from './services/ErrorService.service';

//la constante app se inicia dentro de la propiedad de una clase
export default class App {

  private app: Application;
    
  constructor(private port?: number | string){
    this.app = express();
    this.settings();
    this.middleware();
    this.routes();
    this.errors();
    this.dbConnect(); 
  }

  // Metotodo que define el puerto
  settings(){
    this.app.set('port', this.port || process.env.PORT || 3000)
  }
  
  middleware(){
    this.app.use(morgan('dev'));
  }

  //definicion de rutas 
  routes(){
    this.app.use(Routes)
  }

  // Middleware de manejo de errores
  errors(){
    this.app.use(function(req, res, next) {  // catch 404 and forward to error handler
      next(createError(404));
    });
    this.app.use(handleError);
  }

  async dbConnect(){
    await connect();
  }

  //se crea un metodo llamado listen()
  async listen(){
    await this.app.listen(this.app.get('port'));
    console.log('Servidor en puerto', this.app.get('port'));
  }
  
}
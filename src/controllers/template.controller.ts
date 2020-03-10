/*
import { Request, Response, NextFunction } from 'express';
import { resultpkgQuery, ResultCustomerInformationQuery } from '../services/database.service';
import { responder } from '../middlewares/responder.middleware';

export async function GetCustomer  (req: Request, res: Response, next: NextFunction): Promise<Response> {
  try {
    //Obtener parametros desde la URL
    const {  identificationType, numberIdentification }: any = req.params

    // Se consulta el id de cliente por tipo y numero de documento
    const resultadoConsultaPkg = 
      await  resultpkgQuery(identificationType, numberIdentification, res.locals)

    // Se consulta la informacion del cliente
    const customerInformation = 
      await ResultCustomerInformationQuery (resultadoConsultaPkg, numberIdentification, res.locals)

    return responder( res, customerInformation )
  }catch(error){
    // Se lanza el manejador de excepciones
    next(error)
    return res
  }
}
*/
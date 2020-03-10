import { NextFunction, Request, Response } from 'express'
import { auditException } from './audit.service'
import { auditResponse } from '../middlewares/audit.middleware'

export function handleError(err:any, req:Request, res:Response, next:NextFunction): Response {
  let payload : String
  if(err && err.status && err.status != 500){
    payload = err.message
    res.status(err.status)
  }else{
    payload = "Internal server error"
    res.status(500)
  }
  auditException( res.locals, payload, res.statusCode )
  return auditResponse( res, payload )
}
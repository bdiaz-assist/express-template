import { NextFunction, Request, Response } from 'express'

export function handleError(err:any, req:Request, res:Response, next:NextFunction): Response{
  if(err && err.status && err.status != 500){
    res.status(err.status).json(err.message)
  }else{
    res.status(500).json("Internal server error")
  }
  return res
}
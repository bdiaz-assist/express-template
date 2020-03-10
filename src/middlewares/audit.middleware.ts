import { NextFunction, Request, Response } from 'express'
import oracledb from 'oracledb'
import { dbQueryConn } from '../database'
import { QGetTransactionId, ServiceName } from '../config/database.config'
import { auditTransaction, auditTranResponse, parseToString } from '../services/audit.service'

// Handle input request and record into audit database
export async function auditMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tranId = await dbQueryConn.execute(QGetTransactionId, [],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    )
    res.locals.tranId = tranId.rows[0]['RANDOMGENERATOR()']
    res.locals.srvcName = ServiceName
    res.locals.operation = `Request - ${res.locals.srvcName}`
    auditTransaction(res.locals, `${parseToString(req.originalUrl)}`, 1, res.locals.operation)
    res.locals.traceCount = 2
    next()
  } catch (err) {
    next(err)
  }
}

// Handle output response and record into audit database
export function auditResponse(res: Response, payload: any): Response {
  try {
    auditTransaction(res.locals, parseToString(payload), 1, `Response - ${res.locals.srvcName}`, res.statusCode)
    return res.json(payload)
  } catch (err) {
    return res.status(500).json("Error returning response")
  }
}

import { dbQueryConn } from '../database'
import { QAuditTransaction, QAuditException, ServiceName } from '../config/database.config'

export async function auditTransaction ( srvcInfo: any, msg: String, traceId:Number, operation:String, status?:Number ) {
  srvcInfo.operation = operation
  await dbQueryConn.execute(QAuditTransaction,
    { 
      V_TRANID: srvcInfo.tranId,
      V_SERVICENAME: srvcInfo.srvcName,
      V_OPERATIONNAME: srvcInfo.operation,
      V_MESSAGE: msg,
      V_TRACEID: traceId,
      V_STATUSCODE: status ? status : 0
    }
  )
}

export async function auditException ( srvcInfo: any, msg: String, status:Number ){
  await dbQueryConn.execute(QAuditException,
    { 
      V_TRANID: srvcInfo.tranId,
      V_SERVICENAME: ServiceName,
      V_OPERATIONNAME: srvcInfo.operation,
      V_MESSAGE: msg,
      V_STATUSCODE: status
    }
  )
}

export function auditTranResponse(srvcInfo: any, payload: any, traceCount:Number, operation: String) {
  return auditTransaction(srvcInfo, `Resultado Script: ${parseToString(payload)}`, 
                          traceCount, operation, 200)
}

export function parseToString (payload: any) : String {
  let transactionResponse : String;
  if(typeof payload === 'object'){
    transactionResponse = JSON.stringify(payload)
  }else{
    transactionResponse = payload && payload.toString() ? payload.toString() : 'undefined response'
  }
  return transactionResponse
}

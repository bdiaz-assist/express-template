// MicroService tag name
const ServiceName = `MicroService Name`

// Query Example - Get customer id by document(type, country, number)
const QExampleGetCustomerId =
    `BEGIN 
        PKG_HUB_CRM.PRC_CONSULTACLIENTEHUB  (
            :PTIPODOCUMENTO, 
            :PNUMERODOCUMENTO, 
            :IDCLIENTE, 
            :PVCLIENTEDOCPARAM, 
            :PVCLIENTEDOCSBUSC
        );
    END;`

// Query - Get query by operation name
const QGetQueryByName =
    `SELECT SENTENCESQL FROM CORESRV.MICROSERVICEDETAIL
    WHERE OPERATIONNAME =`

// Query - Generate random transaction id
const QGetTransactionId = `SELECT RANDOMGENERATOR() FROM DUAL`

// Query - Record trace audit into database
const QAuditTransaction = 
    `BEGIN
        AUDIT_MICROSERVICES.CREATEMICROSERVICELOG  (
            :V_TRANID,
            :V_SERVICENAME,
            :V_OPERATIONNAME,
            :V_MESSAGE,
            :V_TRACEID,
            :V_STATUSCODE
        );
    END;`

// Query - Register micro-service failure exception
const QAuditException = 
    `BEGIN
        AUDIT_MICROSERVICES.CREATEMICROSERVICEERROR  (
            :V_TRANID,
            :V_SERVICENAME,
            :V_OPERATIONNAME,
            :V_MESSAGE,
            :V_STATUSCODE
        );
    END;`

// Operation name - Operation name example according to data record at broker db
const OExample = `CONSULTACLIENTE`

export { 
  ServiceName,
  QExampleGetCustomerId, 
  QGetQueryByName,
  QGetTransactionId,
  QAuditTransaction,
  QAuditException, 
  OExample
}

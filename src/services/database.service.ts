import oracledb from 'oracledb'
import { dbQueryConn, dbDataConn } from '../database'
import { QGetQueryByName } from '../config/database.config'


export async function getSQLScript(name: String){
  // Consulta para obtener SCRIPT CONSULTA en BD - Tabla Parametros USRHUBD.SQL_CRM
  const sqlScript = await dbQueryConn.execute(
    `${QGetQueryByName} '${name}'`,
    [],
    { fetchInfo: { "SENTENCESQL": { type: oracledb.STRING } } }
  );
  return sqlScript.rows[0][0]
} 

/*  Database functions template


export async function resultCustomerInformationQuery(resultPkg: any, idNumber: string){
  
  //Consulta para obtener SCRIPT CONSULTA en BD - Tabla Parametros USRHUBD.SQL_CRM # 7 - Obtener Datos Cliente
  const customerQuery = await getSQLScript(7)
  
  //Ejecuta SCRIPT CONSULTA para Obtener Datos Cliente
  const resultCustomerInformation = await db_conn.execute(customerQuery,
    [ "Params" ], 
    { outFormat: oracledb.OUT_FORMAT_OBJECT }
  )
  
  return resultCustomerInformation.rows[0]
}

export async function resultpkgQuery(identificationType: number, numberIdentification: string){
    //Consulta de PKG_HUB_CRM.PRC_CONSULTACLIENTEHUB para obtener IDCLIENTE
    const resultpkgQuery = await db_conn.execute(
        `BEGIN
        PKG_HUB_CRM.PRC_CONSULTACLIENTEHUB
        (:PTIPODOCUMENTO, :PNUMERODOCUMENTO, :IDCLIENTE, :PVCLIENTEDOCPARAM, :PVCLIENTEDOCSBUSC);
        END;`,
        {
            PTIPODOCUMENTO: identificationType,
            PNUMERODOCUMENTO: numberIdentification,
            IDCLIENTE: { type: oracledb.STRING, dir: oracledb.BIND_OUT },
            PVCLIENTEDOCPARAM:  { type: oracledb.STRING, dir: oracledb.BIND_OUT },
            PVCLIENTEDOCSBUSC:{ type: oracledb.STRING, dir: oracledb.BIND_OUT }
        }
    );

    // Validacion de que el cliente exista
    if (!resultpkgQuery.outBinds.IDCLIENTE)
        throw { status: 404, message: "Customer Not Found" }

    return resultpkgQuery;
} 

*/
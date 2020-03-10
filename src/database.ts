const oracledb = require('oracledb');

export let dbQueryConn: any; 

export let dbDataConn: any;

export async function connect(): Promise<void> {
  const { DB_DATA_USER, DB_DATA_PASSWORD, DB_DATA_SERVICENAME, DB_DATA_HOST, DB_DATA_PORT,
    DB_QUERY_USER, DB_QUERY_PASSWORD, DB_QUERY_SERVICENAME, DB_QUERY_HOST, DB_QUERY_PORT } = 
    process.env as any
    
  dbDataConn = 
    await connectDB(DB_DATA_USER, DB_DATA_PASSWORD, DB_DATA_SERVICENAME, DB_DATA_HOST ,DB_DATA_PORT)
  dbQueryConn = 
    await connectDB(DB_QUERY_USER, DB_QUERY_PASSWORD, DB_QUERY_SERVICENAME, DB_QUERY_HOST, DB_QUERY_PORT)
}

async function connectDB(user: String, pass: String, serviceName: String, host: Number, port: Number) {
  let connection = await oracledb.getConnection({
    user: user,
    password: pass,
    connectString: `(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=${host})(PORT=${port}))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=${serviceName})))`
  });
  return connection
}


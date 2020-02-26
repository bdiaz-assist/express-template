const oracledb = require('oracledb');

export let db_conn: any;

export function connect(): void {
  db_conn = oracledb.getConnection({
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    connectString: `(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=${process.env.DBHOST})(PORT=${process.env.DBPORT}))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=${process.env.DBSERVICENAME})))`
  });
}


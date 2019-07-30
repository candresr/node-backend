import mysql from 'mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection((err, connection) => {
  if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.')
      }
  }

  if (connection) connection.release()

  return
})


// pool.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });

export default pool;
// const { Pool } = require('pg');
import  pg  from 'pg';
const { Pool } = pg;

// Configurar la conexión a la base de datos PostgreSQL
 const pool = new Pool({
  connectionString: 'postgresql://postgres:admin@localhost:5432/bancosolar',
});
export default pool;
// module.exports = pool;
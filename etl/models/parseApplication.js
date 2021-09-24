const { pool, redis } = require('../helpers/database');

const applications = [];

module.exports = async function parseApplication({ id, name, shortName, locale}) {
  if (applications.includes(id)) return;
  applications.push(id);
  const client = await pool.connect();
  try {
    await client.query(`
      INSERT INTO categories (
        id,
        name,
        shortname,
        locale
      ) VALUES (
        $1, $2, $3, $4
      );
    `, [id, name, shortName, locale]);
  } catch (e) {
    console.log(e);
  } finally {
    return client.release();
  }
};

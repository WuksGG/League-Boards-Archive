const { pool, redis } = require('../helpers/database');

const applications = [];

module.exports = async function parseApplication({ id, name, shortName, locale}) {
  // Check memory if exists
  // if exists return
  if (applications.includes(id)) return;

  console.log({ id, name, shortName, locale });
  // if notexists
    // store into memory
  applications.push(id);
    // insert into database, using ifnotexists

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

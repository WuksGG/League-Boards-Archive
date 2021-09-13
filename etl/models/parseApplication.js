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
    // const result = client.query(`SELECT * FROM test`);
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
};

const { pool, redis } = require('../helpers/database');

module.exports = async function parseApplication({ id, name, shortName, locale}) {
  if (await redis.categories.get(id)) return;
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
    await redis.categories.set(id, 1);
  } catch (e) {
    if (e.code === '23505') {
      await redis.categories.set(id, 1);
      process.stdout.write(`\r${e.detail}`);
    } else {
      process.stdout.write(`\n${e.detail}\n`);
    }
  } finally {
    return client.release();
  }
};

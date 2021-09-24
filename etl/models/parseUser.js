const { pool, redis } = require('../helpers/database');

module.exports = async function parseUser({
  id,
  name,
  lolSummonerLevel,
  lolProfileIcon,
  realm,
  isModerator,
  isRioter,
  modifiedAt,
  createdAt,
  banEndsAt
}) {
  if (await redis.users.get(id)) return;
  const client = await pool.connect();
  try {
    await client.query(`
      INSERT INTO users (
        id,
        name,
        summonerlevel,
        profileicon,
        realm,
        ismoderator,
        isrioter,
        createdat,
        banendsat
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9
      );
    `, [
      id,
      name,
      lolSummonerLevel,
      lolProfileIcon,
      realm,
      isModerator,
      isRioter,
      createdAt,
      banEndsAt
    ]);
    redis.users.set(id, 1);
  } catch (e) {
    // process.stdout.write(`${e.detail} `);
  } finally {
    return client.release();
  }
};

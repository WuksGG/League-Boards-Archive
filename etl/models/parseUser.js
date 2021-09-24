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
  redis.users.get(id)
    .then(async (res) => {
      if (res) return;
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
      } catch (e) {
        console.log(e);
      } finally {
        return client.release();
      }
    });
  return await redis.users.set(id, 1);
};

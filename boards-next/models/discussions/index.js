import { pool } from '../../helpers/database';

export async function getDiscussion(context) {
  const client = await pool.connect();
  try {
    return await client.query(`
    WITH cat as (
      SELECT c.id, c.shortname, c.name, c.locale
      FROM categories c
      WHERE shortname = $1
    ), t as (
      SELECT threads.*
      FROM threads, cat
      WHERE threads.id = $2 AND threads.applicationid = cat.id
    )
    SELECT jsonb_build_object(
      'id', t.id,
      'title', t.title,
      'application', (
        SELECT jsonb_build_object(
          'id', cat.id,
          'shortName', cat.shortName,
          'name', cat.name,
          'locale', cat.locale
        )
      ),
      'user', (
        SELECT jsonb_build_object(
          'id', us.id,
          'name', us.name,
          'summonerLevel', us.summonerlevel,
          'profileIcon', us.profileIcon,
          'realm', us.realm,
          'isModerator', us.isModerator,
          'isRioter', us.isRioter,
          'createdAt', us.createdAt,
          'banEndsAt', us.banEndsAt
        )
        FROM (
          SELECT *
          FROM users u
          WHERE t.userid = u.id
        ) us
      ),
      'upVotes', t.upvotes,
      'downVotes', t.downvotes,
      'softComments', t.softComments,
      'totalComments', t.totalComments,
      'createdAt', t.createdAt,
      'contentType', t.contenttype,
      'content', t.content
    ) results
    FROM t, cat;
    `, [context.query.category, context.query.threadid]);
  } catch (e) {
    return e;
  } finally {
    client.release();
  }
}
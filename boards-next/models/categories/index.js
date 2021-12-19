import { pool } from '../../helpers/database';

export async function getCategories(realm) {
  const client = await pool.connect();
  try {
    return await client.query(`SELECT * FROM categories ORDER BY id`);
  } catch (e) {
    console.log(e);
    return e;
  } finally {
    client.release();
  }
}

export async function getThreadsFromCategory(context) {
  const client = await pool.connect();
  console.log(context.query);

  try {
    return await client.query(`
      WITH cat as (
        SELECT c.id, c.shortname, c.name, c.locale
        FROM categories c
        WHERE shortname = $1
      ), t as (
        SELECT
          th.id,
          th.title,
          th.applicationid,
          th.userid,
          th.upvotes,
          th.downvotes,
          th.viewcount,
          th.softcomments,
          th.totalcomments,
          th.createdat,
          th.modifiedat,
          th.lastcommentedat,
          th.contenttype,
          th.content,
          th.issticky,
          th.isglobalsticky,
          th.hasriotercomments
        FROM threads th, cat
        WHERE th.applicationid = cat.id
        GROUP BY th.applicationid, th.id
        ORDER BY th.createdat DESC
        LIMIT 20
      )
      SELECT
        jsonb_build_object(
          'id', cat.id,
          'name', cat.name,
          'shortname', cat.shortname,
          'locale', cat.locale
        ) catdata,
        jsonb_agg(jsonb_build_object(
          'id', t.id,
          'title', t.title,
          'application', (
          SELECT jsonb_build_object(
          'id', app.id,
          'name', app.name,
          'shortname', app.shortname,
          'locale', app.locale
          ) FROM (
            SELECT *
            FROM categories c
            WHERE t.applicationid = c.id
          ) app
          ),
          'user', (
          SELECT jsonb_build_object(
          'user', u.id,
          'name', u.name,
          'summonerLevel', u.summonerlevel,
          'profileicon', u.profileicon,
          'realm', u.realm,
          'isModerator', u.ismoderator,
          'isRioter', u.isRioter,
          'createdAt', u.createdAt,
          'banEndsAt', u.banendsat
          )
          FROM (
          SELECT *
          FROM users u
          WHERE u.id = t.userid
          ) AS u
          ),
          'upVotes', t.upvotes,
          'downVotes', t.downvotes,
          'viewCount', t.viewcount,
          'softComments', t.softcomments,
          'totalComments', t.totalcomments,
          'createdAt', t.createdat,
          'modifiedAt', t.modifiedat,
          'lastCommentedAt', t.lastcommentedat,
          'contentType', t.contenttype,
          'content', (SELECT LEFT(t.content ->> 'body', 150)),
          'isSticky', t.issticky,
          'isGlobalSticky', t.isglobalsticky,
          'hasRioterComments', t.hasriotercomments
        )) result
      FROM t, cat
      GROUP BY cat.id, cat.name, cat.shortname, cat.locale;
    `, [context.query.category]);
  } catch (e) {
    console.log(e);
    return e;
  } finally {
    client.release();
  }
}

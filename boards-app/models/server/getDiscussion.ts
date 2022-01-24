import { pg } from '../../utils/server/database';

export default async function getDiscussion(appShortName, discussionId) {
  console.log(appShortName, discussionId);
  const client = await pg.connect();
  try {
    const result = await client.query(`
      WITH cat AS (
        SELECT id, name, shortname, locale
        FROM categories
        WHERE shortname = $1
      )
      SELECT t.id, t.title, t.upvotes, t.downvotes, t.viewcount, t.softcomments, t.totalcomments, t.contenttype, t.content, t.issticky, t.isglobalsticky, t.hasriotercomments,
      (jsonb_build_object(
        'createdAt', t.createdat,
        'modifiedAt', t.modifiedat,
        'lastCommentedAt', t.lastcommentedat
      )) as dates,
      (jsonb_build_object(
        'id', cat.id,
        'name', cat.name,
        'shortName', cat.shortname,
        'locale', cat.locale
      )) as application,
      (
        SELECT jsonb_build_object(
          'id', u.id,
          'name', u.name,
          'summonerLevel', u.summonerlevel,
          'profileIcon', u.profileIcon,
          'realm', u.realm,
          'isModerator', u.isModerator,
          'isRioter', u.isRioter,
          'banEndsAt', u.banEndsAt
        )
        FROM users u
        WHERE u.id = t.userid
      ) AS user
      FROM threads t, cat
      WHERE cat.id = t.applicationid AND t.id = $2
      LIMIT 1;
    `, [appShortName, discussionId]);
    return [null, result.rows[0]];
  } catch(e) {
    return [e, null];
  } finally {
    client.release();
  }
}


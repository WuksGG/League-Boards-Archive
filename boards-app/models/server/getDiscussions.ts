import { pg } from '../../utils/server/database';
import type { Discussions } from '../../types/app';

type Result = ((any) | (null | Discussions))[];

export default async function getDiscussions(appId: string): Promise<Result> {
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
      WHERE cat.id = t.applicationid
      ORDER BY t.createdat DESC
      LIMIT 15;
    `, [appId]);
    return [null, result.rows];
  } catch(e) {
    return [e, null];
  } finally {
    client.release();
  }
}

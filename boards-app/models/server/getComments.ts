import { pg } from '../../utils/server/database';
import type { Comments } from '../../types/app';


type Result = ((any) | (null | Comments))[];

export default async function getComments(discussionId: string): Promise<Result> {
  const client = await pg.connect();
  try {
    const result = await client.query(`
      SELECT commentid as id, message, parentcommentid, upvotes, downvotes,
      jsonb_build_object(
        'createdAt', createdat,
        'modifiedAt', modifiedAt
      ) AS dates,
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
        WHERE u.id = c.userid
      ) AS user
      FROM comments c
      WHERE threadid = $1
      ORDER BY createdat ASC;
    `, [discussionId]);
    return [null, result.rows];
  } catch(e) {
    return [e, null];
  } finally {
    client.release();
  }
}

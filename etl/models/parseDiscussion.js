const parseUser = require('./parseUser');
const parseComments = require('./parseComments');
const parseApplication = require('./parseApplication');
const { pool } = require('../helpers/database');

module.exports = async function parseDiscussion(discussion) {
  // Application Logic
  await parseApplication(discussion.application);

  // User Logic
  if (discussion.user) {
    await parseUser(discussion.user);
  }

  // Discussion Logic here then comments
  const client = await pool.connect();
  try {
    await client.query(`
      INSERT INTO threads (
        id,
        title,
        applicationid,
        userid,
        upvotes,
        downvotes,
        viewcount,
        softcomments,
        totalcomments,
        createdat,
        modifiedat,
        lastcommentedat,
        contenttype,
        content,
        issticky,
        isglobalsticky,
        hasriotercomments
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17
      );
    `, [
      discussion.id,
      discussion.title,
      discussion.application.id,
      discussion.user.id,
      discussion.upVotes,
      discussion.downVotes,
      discussion.viewCount,
      discussion.softComments,
      discussion.totalComments,
      discussion.createdAt,
      discussion.modifiedAt,
      discussion.lastCommentedAt,
      discussion.contentType,
      discussion.content,
      discussion.isSticky,
      discussion.isGlobalSticky,
      discussion.hasRioterComments,
    ]);
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }

  await parseComments(discussion.comments, discussion.id);
  return;
};

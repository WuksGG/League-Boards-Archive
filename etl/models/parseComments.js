const { pool } = require('../helpers/database');
const parseUser = require('./parseUser');

async function forEachInner({
  id,
  message,
  user,
  parentCommentId,
  replies,
  createdAt,
  modifiedAt,
  upVotes,
  downVotes,
  numChildren,
}, threadId) {
  await parseUser(user);
  const client = await pool.connect();
  try {
    await client.query(`
      INSERT INTO comments (
        threadid,
        commentid,
        message,
        userid,
        parentcommentid,
        createdat,
        modifiedat,
        upvotes,
        downvotes,
        numchildren
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10
      );
    `, [
      threadId,
      id,
      message,
      user.id,
      parentCommentId,
      createdAt,
      modifiedAt,
      upVotes,
      downVotes,
      numChildren,
    ]);
    await parseComments(replies, threadId);
  } catch (e) {
    console.log(e);
  } finally {
    return client.release();
  }
}

async function parseComments(comments, threadId) {
  // console.log(threadId);
  // console.log(comments.comments);
  comments.comments.forEach((comment) => forEachInner(comment, threadId));
  return;
};

module.exports = parseComments;

module.exports = async function parseComments(comments) {
  comments.comments.forEach(async (comment) => {
    console.log(comment);
    await parseComments(comment.replies);
  });
  return;
};

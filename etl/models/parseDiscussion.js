const parseUser = require('./parseUser');
const parseComments = require('./parseComments');
const parseApplication = require('./parseApplication');

module.exports = async function parseDiscussion(discussion) {
  // console.log(discussion);
  // console.log(discussion.content.attachments);
  // await parseApplication(discussion.application);
  // await parseUser(discussion.user);

  // Discussion Logic here then comments

  await parseComments(discussion.comments);
  return;
};

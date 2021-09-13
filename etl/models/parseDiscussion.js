const parseUser = require('./parseUser');
const parseComments = require('./parseComments');
const parseApplication = require('./parseApplication');

module.exports = async function parseDiscussion(discussion) {
  // console.log(discussion);
  await parseApplication(discussion.application);
  // await parseUser(discussion.user);

  // Logic here then comments

  // await parseComments(discussion.comments);
  return;
};

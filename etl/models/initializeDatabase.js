module.exports = async function initializeDatabase() {
  console.log('Initializing Database...');
  // Drop Tables
  const dropQuery = `
    DROP TABLE IF EXISTS categories;
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS threads;
    DROP TABLE IF EXISTS comments;
  `;

  // Create Applications Database
  const createApplicationsTableQuery = `
  `;

  // Create Users Database
  const createUsersTableQuery = ``;

  // Create Threads Database
  const createThreadsTableQuery = ``;

  // Create Comments Database
  const creatteCommentsTableQuery = ``;
};

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
    CREATE TABLE IF NOT EXISTS categories (

    );
  `;

  // Create Users Database
  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      summonerLevel INTEGER NOT NULL,
      profileIcon INTEGER,
      realm VARCHAR(5) NOT NULL,
      isModerator BOOLEAN DEFAULT false,
      isRioter BOOLEAN DEFAULT false,
      createdAt TIMESTAMP WITH TIME ZONE,
      banEndsAt TIMESTAMP WITH TIME ZONE
    );
  `;

  // Create Threads Database
  const createThreadsTableQuery = ``;

  // Create Comments Database
  const createCommentsTableQuery = ``;
};

const { pool } = require('../helpers/database');

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
      id VARCHAR(20) PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      shortname VARCHAR(50) NOT NULL,
      locale VARCHAR(10)
    );
  `;

  // Create Users Database
  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      summonerlevel INTEGER NOT NULL,
      profileicon INTEGER,
      realm VARCHAR(5) NOT NULL,
      ismoderator BOOLEAN DEFAULT false,
      isrioter BOOLEAN DEFAULT false,
      createdat TIMESTAMP WITH TIME ZONE,
      banendsat TIMESTAMP WITH TIME ZONE
    );
  `;

  // Create Threads Database
  const createThreadsTableQuery = `
  `;

  // Create Comments Database
  const createCommentsTableQuery = `
  `;

  const client = await pool.connect();
  try {
    await client.query(dropQuery);
    await client.query(createApplicationsTableQuery);
    await client.query(createUsersTableQuery);
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
};

const { pool } = require('../helpers/database');

module.exports = async function initializeDatabase() {
  console.log('Initializing Database...');
  // Drop Tables
  const dropQuery = `
    DROP TABLE IF EXISTS comments;
    DROP TABLE IF EXISTS threads;
    DROP TABLE IF EXISTS categories;
    DROP TABLE IF EXISTS users;
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
      id BIGINT PRIMARY KEY,
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
    CREATE TABLE IF NOT EXISTS threads (
      id VARCHAR(15) PRIMARY KEY,
      title VARCHAR(150) NOT NULL,
      applicationid VARCHAR(20) NOT NULL REFERENCES categories(id),
      userid BIGINT REFERENCES users(id),
      upvotes INTEGER,
      downvotes INTEGER,
      viewcount INTEGER,
      softcomments INTEGER,
      totalcomments INTEGER,
      createdat TIMESTAMP WITH TIME ZONE,
      modifiedat TIMESTAMP WITH TIME ZONE,
      lastcommentedat TIMESTAMP WITH TIME ZONE,
      contenttype VARCHAR(30),
      content JSONB,
      issticky BOOLEAN,
      isglobalsticky BOOLEAN,
      hasriotercomments BOOLEAN
    );
  `;
  /*
  content {
    body
    body_html
    pinned
  }
  */

  // Create Comments Database
  const createCommentsTableQuery = `
    CREATE TABLE IF NOT EXISTS comments (
      threadid VARCHAR(15) NOT NULL REFERENCES threads(id),
      commentid VARCHAR NOT NULL,
      message VARCHAR,
      userid BIGINT NOT NULL REFERENCES users(id),
      parentcommentid VARCHAR,
      createdat TIMESTAMP WITH TIME ZONE,
      modifiedat TIMESTAMP WITH TIME ZONE,
      upvotes INTEGER,
      downvotes INTEGER,
      numchildren INTEGER,
      PRIMARY KEY (threadid, commentid)
    );
  `;

  const client = await pool.connect();
  try {
    await client.query(dropQuery);
    await client.query(createApplicationsTableQuery);
    await client.query(createUsersTableQuery);
    await client.query(createThreadsTableQuery);
    await client.query(createCommentsTableQuery);
    await client.query(`CREATE INDEX ON threads (createdat)`);
    await client.query(`CREATE INDEX ON comments (createdat)`);
    await client.query(`CREATE INDEX ON categories (shortname)`);
    await client.query(`CREATE INDEX ON threads (applicationid)`);
    await client.query(`CREATE INDEX thread_ts_idx ON threads (applicationid, createdat)`);
    await client.query(`CREATE INDEX comment_ts_idx ON comments (threadid, createdat)`);
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
};

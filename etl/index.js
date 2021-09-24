const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
require('dotenv').config('.env');

const { pool, redis } = require('./helpers/database');
const parseDiscussion = require('./models/parseDiscussion');
const initializeDatabase = require('./models/initializeDatabase');
const pathname = path.join(__dirname, 'data', 'eu', 'posts');
const filenames = fs.readdirSync(pathname);

async function etl() {
  console.log('Starting ETL...');
  await redis.users.flushdb();
  filenames.forEach((filename) => {
    // if (!filename.includes('EFAOrptV') && !filename.includes('6H2K9w5K')) return;
    // 3eWpXbJi html
    // slFBEUB8/discussions/3eWpXbJi
    // if (!filename.includes('7MeLoywU')) return;
    // console.log(filename);
    // return;
    // if (!filename.includes('3eWpXbJi')) return;
    fs.readFile(path.join(pathname, filename), (err, data) => {
      if (err) return err;
      zlib.brotliDecompress(data, (err, buffer) => {
        if (err) return err;
        const { discussion } = JSON.parse(buffer.toString('utf8'));
        parseDiscussion(discussion);
      });
    });
  });
}

(async () => {
  if (process.argv[2] === 'all') {
    await initializeDatabase();
    await etl();
  } else if (process.argv[2] === 'init') {
    await initializeDatabase();
  } else if (process.argv[2] === 'etl') {
    await etl();
  } else {
    console.log('No valid argument provided.');
  }
  // await pool.end();
  console.log('Tasks Complete!');
})();

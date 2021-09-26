const fs = require('fs');
const async = require('async');
const zlib = require('zlib');
const path = require('path');
require('dotenv').config('.env');

const { pool, redis } = require('./helpers/database');
const parseDiscussion = require('./models/parseDiscussion');
const initializeDatabase = require('./models/initializeDatabase');
const pathname = path.join(__dirname, 'data', 'eu', 'posts');
const filenames = fs.readdirSync(pathname);

const callback = (err, data) => {
  if (err) {
    console.log(err);
    return err;
  }
  zlib.brotliDecompress(data, (err, buffer) => {
    if (err) {
      console.log(err);
      return err;
    }
    const { discussion } = JSON.parse(buffer.toString('utf8'));
    process.stdout.write(`\r${discussion.id}                 `)
    parseDiscussion(discussion);
  });
};

const q = async.queue(function({ filename }, callback) {
  fs.readFile(filename, (err, data) => {
    callback(err, data);
  });
}, 10);

async function etl() {
  console.log('Starting ETL...');
  await redis.users.flushdb();
  await redis.categories.flushdb();
  const mappedFilenames = filenames.map((filename) => ({ filename: path.join(pathname, filename) }));
  q.push(mappedFilenames, callback);
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
  console.log('Tasks Complete!');
})();

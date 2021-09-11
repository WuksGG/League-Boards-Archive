const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
require('dotenv').config('.env');

const { pool, redis } = require('./helpers/database');
const Models = require('./models');
const pathname = path.join(__dirname, 'data', 'eu', 'posts');
const filenames = fs.readdirSync(pathname);

console.log(Models);

const processThread = async (discussion) => {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM users');
    const rediscmd = await redis.set('key', 100, 'ex', 10);
    console.log(rediscmd);
    const redisresult = await redis.get('key');
    console.log(redisresult);
    console.log(discussion);
    console.log(discussion.comments);
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    client.end();
  }
};

(async () => {
  filenames.forEach((filename) => {
    if (!filename.includes('EFAOrptV')) return;
    console.log(filename);
    fs.readFile(path.join(pathname, filename), (err, data) => {
      zlib.brotliDecompress(data, (err, buffer) => {
        if (err) return err;
        const { discussion } = JSON.parse(buffer.toString('utf8'));
        processThread(discussion);
      });
    });
  });
})();


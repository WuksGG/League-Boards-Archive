const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const pathname = path.join(__dirname, 'data', 'eu', 'posts');

const filenames = fs.readdirSync(pathname);

filenames.forEach((filename) => {
  if (!filename.includes('EFAOrptV')) return;
  console.log(filename);
  fs.readFile(path.join(pathname, filename), (err, data) => {
    zlib.brotliDecompress(data, (err, buffer) => {
      if (err) return err;
      console.log('here');
      console.log(buffer.toString('utf8'));
      console.log('above');
    });
  });
});


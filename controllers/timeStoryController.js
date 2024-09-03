const https = require('https');

function fetchStories() {
  return new Promise((resolve, reject) => {
    https.get('https://time.com', (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const stories = extractStories(data);
        resolve(stories);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

function extractStories(html) {
  const stories = [];
  const regex = /<h3 class="latest-stories__item-headline">(.+?)<\/h3>.*?<a href="(.+?)"/gs;
  let match;

  while ((match = regex.exec(html)) !== null && stories.length < 6) {
    stories.push({
      title: match[1].trim(),
      link: `https://time.com${match[2]}`
    });
  }
  return stories;
}

function getStories(req, res) {
  fetchStories()
    .then(stories => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(stories));
    })
    .catch(err => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error 500');
    });
}

module.exports = { getStories };
const { getStories } = require("../controllers/timeStoryController");

function apiRequest(req, res) {
  if (req.url === '/getTimeStories' && req.method === 'GET') {
    getTimeStories(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}

module.exports = { apiRequest };
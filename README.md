# Time.com Latest Stories API

This project provides a simple API to fetch the latest six stories from Time.com.

## Project Structure

project-directory/
    server.js 
    routes
        index.js
    controllers
        timeStoryController.js


## How to Run

1. **Install Node.js**: Node.js is installed on your system.
2. **Start the Server**: Run `node server.js` to start the server.

## Usage

- Access the API at: `http://localhost:3000/getTimeStories`
- The API returns a JSON array with the latest six stories, each with a "title" and "link".

## Example Response

```json
[
  {
    "title": "Amy Schneider's Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
    "link": "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/"
  },
  {
    "title": "Writing With Fire' Shines a Light on All-Women News Outlet",
    "link": "https://time.com/6142628/writing-with-fire-india-documentary/"
  },
]
import express from 'express';
import { posts } from './blog-posts.js';

const app = express();
const port = 3005;

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Server del mio blog');
})

app.get('/bacheca', (req, res) => {
  const post = {
    info: {
      total: posts.length,
    },
    results: posts
  }
  res.json(post)
})

app.listen(port, function () {
  console.log("Server is listening on port: " + port);
});

const express = require('express');
const { withSession } = require('@clerk/clerk-sdk-node');

const app = express();
const port = 3000;

app.use(express.json()); // This is important to correctly parse JSON request body

app.get('/api/revalidate', withSession(), (req, res) => {
  const userId = req.session.userId;
  // This endpoint will only be accessible for authenticated users, as ensured by `withSession`.
  res.send(`Hello user with id ${userId}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://exp://10.194.47.31:19000:${port}`);
});



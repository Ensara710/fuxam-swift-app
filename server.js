const express = require('express');
const { withSession } = require('@clerk/clerk-sdk-node');
const app = express();
const port = 3000;


app.get('/protected', withSession(), (req, res) => {
    const userId = req.session.userId;
    // This endpoint will only be accessible for authenticated users, as ensured by `withSession`.
    res.send(`Hello user with id ${userId}`);
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

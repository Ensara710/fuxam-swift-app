const express = require('express');
const { requireSession } = require("/auth")
const { withSession } = require('@clerk/clerk-sdk-node');
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node')
const app = express();
const port = 3000;


//App.js code
app.get(
  '/protected-endpoint',
  ClerkExpressRequireAuth(),
  (req, res) => {
    res.json(req.auth);
  }
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send('Unauthenticated!');
});



app.get('/protected', withSession(), (req, res) => {
    const userId = req.session.userId;
   
    res.send(`Hello user with id ${userId}`);
    console.log(express.response)
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

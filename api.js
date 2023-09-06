import "dotenv/config"; 
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";
import express from "express";
import cors from "cors";
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.get(
    "/protected-endpoint",
    ClerkExpressWithAuth(),
    (req, res) => {
    res.json(req.auth);
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
import cors from "cors";
import express from "express";
import { config } from "dotenv";
import { MongoClient, ServerApiVersion } from 'mongodb';

import connectDB from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());
config();

const URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

await connectDB(client, URI);

app.get("/", (req, res) => {
    res.send({message: "Hello World!"});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

require("dotenv").config();
// setup for mongo atlas connection
const mongo = require("mongodb").MongoClient;
const DB_URI = process.env.MONGOLAB_URI;

const dbClient = async () => {
  const client = await mongo.connect(DB_URI);
  return client.db("users");
};

const clearDatabase = async () => {
  const db = await dbClient();
  console.log(db);
  // buggy, colection is created once at server startup. when dropped, error is thrown - ns not found...
  // instead of drop collection they shoule remove all documents from it
  return db.collection("users").remove({})
};

const seedDatabase = async (data) => {
  const db = await dbClient();
  return db.collection("users").insertOne(data);
};

module.exports = {
  dbClient,
  clearDatabase,
  seedDatabase,
};

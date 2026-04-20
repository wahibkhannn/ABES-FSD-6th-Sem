import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO_URI;

const dbName = "mydatabase"; 

let client;

const dbConnect = async () => {
    if (!client) {
        client = new MongoClient(url);
        await client.connect();
        console.log(" MongoDB Connected");
    }
    return client.db(dbName);
};

export default dbConnect;
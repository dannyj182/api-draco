import { MongoClient } from "mongodb";
import config from "../config.js";

export class CnxMongoDB {
    static connection = false;
    static db;
    static client;

    static connect = async _ => {
        try {
            CnxMongoDB.client = new MongoClient(config.URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            await CnxMongoDB.client.connect();

            CnxMongoDB.db = CnxMongoDB.client.db(config.BASE);
            CnxMongoDB.connection = true;
        } catch (error) {
            console.log(error.message);
        }
    };

    static disconnect = async (_) => {
        if (!CnxMongoDB.connection) return;
        await CnxMongoDB.client.close();
    };
}
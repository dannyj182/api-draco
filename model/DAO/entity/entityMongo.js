import { CnxMongoDB } from "../../cnxMongoDB.js"

export class EntityMongo {
    getCollection = async collectionName => {
        if (!CnxMongoDB.connection) return []
        try {
            return await CnxMongoDB.db.collection(collectionName)
            .find().sort({recvTime:-1}).toArray()
        }
        catch (error) {
            console.error('Error en getCollection', error)
            return {
                error: 'Error en getCollection',
                message: `${error}`
            }
        }
    }
}
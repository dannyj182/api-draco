export class EntityMemory {
    constructor() {
        this.collection = []
    }
    getCollection = async collectionName => {
        try {
            console.log('getCollection in EntityMemory', collectionName);
            return this.collection
        }
        catch {
            return []
        }
    }
}
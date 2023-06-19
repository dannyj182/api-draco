import config from '../config.js'
import { EntityFactoryDAO } from '../model/DAO/entity/entityFactory.js'

export class EntityService {
    constructor() {
        this.entityModel = EntityFactoryDAO.get(config.DB)
    }
    getCollection = async (id) => {
        const collectionName = `entity-x002fxffff${id}xffffAirQualityObserved`
        return await this.entityModel.getCollection(collectionName)
    }
}
import { EntityMongo } from './entityMongo.js'
import { EntityMemory } from './entityMemory.js'

export class EntityFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MONGO':
                console.log(':::::::: Persistiendo en MongoDB ::::::::')
                return new EntityMongo()
            default:
                console.log(':::::::: Persistiendo en default (Memoria) ::::::::')
                return new EntityMemory()
        }
    }
}
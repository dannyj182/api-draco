import { EntityService } from '../services/entityService.js'

export class EntityController {
    constructor() {
        this.entityService = new EntityService()
    }
    getCollection = async (req,res) => {
        const { id } = req.params
        res.json( await this.entityService.getCollection(id) )
    }
}
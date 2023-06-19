import express from 'express'
import { EntityController } from '../controller/entityController.js'

export class EntityRouter {
    constructor() {
        this.router = express.Router()
        this.entityController = new EntityController()
    }
    start() {
        this.router.get('/:id', this.entityController.getCollection)
        return this.router
    }
}
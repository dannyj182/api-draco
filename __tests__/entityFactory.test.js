import { EntityMongo } from '../model/DAO/entity/entityMongo.js'
import { EntityMemory } from '../model/DAO/entity/entityMemory.js';
import { EntityFactoryDAO } from '../model/DAO/entity/entityFactory.js';

describe('EntityFactoryDAO', () => {
  // Prueba para verificar si se devuelve una instancia de EntityMongo cuando el tipo es "MONGO"
  it('debería devolver una instancia de EntityMongo cuando el tipo sea "MONGO"', () => {
    const tipo = 'MONGO';
    const instancia = EntityFactoryDAO.get(tipo);
    expect(instancia).toBeInstanceOf(EntityMongo);
  });

  // Prueba para verificar si se devuelve una instancia de EntityMemory cuando el tipo no es "MONGO"
  it('debería devolver una instancia de EntityMemory cuando el tipo no sea "MONGO"', () => {
    const tipo = 'OTRO_TIPO';
    const instancia = EntityFactoryDAO.get(tipo);
    expect(instancia).toBeInstanceOf(EntityMemory);
  });
});
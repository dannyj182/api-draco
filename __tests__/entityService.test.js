import { EntityService } from '../services/entityService.js';
import { EntityFactoryDAO } from '../model/DAO/entity/entityFactory.js';
import config from '../config.js';

// Mock del módulo '../model/DAO/entity/entityFactory.js'
jest.mock('../model/DAO/entity/entityFactory.js');

describe('EntityService', () => {
  describe('getCollection', () => {
    it('debería llamar a entityModel.getCollection con el nombre de colección correcto', async () => {
      const id = 123;
      const expectedCollectionName = `entity-x002fxffff${id}xffff${config.ENTITY_TYPE}`;
      const expectedCollection = 'mocked collection';

      // Configuración del mock del método getCollection en EntityFactoryDAO
      EntityFactoryDAO.get.mockReturnValue({
        getCollection: jest.fn().mockResolvedValue(expectedCollection)
      });

      // Creación de una instancia de EntityService
      const entityService = new EntityService();

      // Llamada al método getCollection y almacenamiento del resultado
      const result = await entityService.getCollection(id);

      // Verificación de llamadas y resultados esperados
      expect(EntityFactoryDAO.get).toHaveBeenCalledWith(config.DB);
      expect(EntityFactoryDAO.get().getCollection).toHaveBeenCalledWith(expectedCollectionName);
      expect(result).toEqual(expectedCollection);
    });
  });
});
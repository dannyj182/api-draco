// entityMongo.test.js
import { EntityMongo } from "../model/DAO/entity/entityMongo.js";
import { CnxMongoDB } from "../model/cnxMongoDB.js";

jest.mock("../model/cnxMongoDB.js", () => ({
  CnxMongoDB: {
    connection: true,
    db: {
      collection: jest.fn().mockReturnValue({
        find: jest.fn().mockReturnThis(),
        sort: jest.fn().mockReturnThis(),
        toArray: jest.fn().mockResolvedValue([])
      })
    }
  }
}));
describe('EntityMongo', () => {
    describe('getCollection', () => {
      it('debería devolver los documentos ordenados si hay conexión', async () => {
        // Creamos una instancia de EntityMongo
        const entityMongo = new EntityMongo();
  
        // Llamamos al método getCollection
        const result = await entityMongo.getCollection('myCollection');
  
        // Verificamos que se haya llamado a los métodos de CnxMongoDB correctamente
        expect(CnxMongoDB.db.collection).toHaveBeenCalledWith('myCollection');
        expect(CnxMongoDB.db.collection().find).toHaveBeenCalled();
        expect(CnxMongoDB.db.collection().find().sort).toHaveBeenCalledWith({ recvTime: -1 });
        expect(CnxMongoDB.db.collection().find().sort().toArray).toHaveBeenCalled();
  
        // Verificamos que el resultado sea el valor esperado (en este caso, un array vacío)
        expect(result).toEqual([]);
      });
  
      it('debería devolver un objeto de error si hay un error en la consulta', async () => {
        // Simulamos un error en la consulta
        const errorMessage = 'Error en la consulta';
        CnxMongoDB.db.collection().find().sort().toArray.mockRejectedValueOnce(new Error(errorMessage));
  
        // Creamos una instancia de EntityMongo
        const entityMongo = new EntityMongo();
  
        // Llamamos al método getCollection
        const result = await entityMongo.getCollection('myCollection');
  
        // Verificamos que se haya llamado a los métodos de CnxMongoDB correctamente
        expect(CnxMongoDB.db.collection).toHaveBeenCalledWith('myCollection');
        expect(CnxMongoDB.db.collection().find).toHaveBeenCalled();
        expect(CnxMongoDB.db.collection().find().sort).toHaveBeenCalledWith({ recvTime: -1 });
        expect(CnxMongoDB.db.collection().find().sort().toArray).toHaveBeenCalled();
  
        // Verificamos que el resultado sea un objeto de error con el mensaje esperado
        expect(result).toEqual({
          error: 'Error en getCollection',
          message: `Error: ${errorMessage}`
        });
      });
  
      it('debería devolver un array vacío si no hay conexión', async () => {
        // Modificamos la propiedad de conexión de CnxMongoDB para simular la falta de conexión
        CnxMongoDB.connection = false;
  
        // Creamos una instancia de EntityMongo
        const entityMongo = new EntityMongo();
  
        // Llamamos al método getCollection
        const result = await entityMongo.getCollection('myCollection');
  
        // Verificamos que el resultado sea un array vacío
        expect(result).toEqual([]);
      });
    });
  });
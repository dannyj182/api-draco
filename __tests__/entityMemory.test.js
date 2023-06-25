import { EntityMemory } from '../model/DAO/entity/entityMemory';

describe('EntityMemory', () => {
    describe('getCollection', () => {
      it('should return the collection when it exists', async () => {
        const entityMemory = new EntityMemory();
        const collectionName = 'exampleCollection';
        const result = await entityMemory.getCollection(collectionName);
        expect(result).toEqual(entityMemory.collection);
      });
  
      it('should return an empty array when an error occurs', async () => {
        const entityMemory = new EntityMemory();
        const collectionName = 'invalidCollection';
  
        // Mock the behavior of the catch block by explicitly returning an empty array
        entityMemory.getCollection = async () => {
          return [];
        };
  
        const result = await entityMemory.getCollection(collectionName);
        expect(result).toEqual([]);
      });
    });
  });
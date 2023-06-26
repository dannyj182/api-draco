import { CnxMongoDB } from "../model/cnxMongoDB";
import mongoClient from "mongodb";
import config from "../config";

jest.mock("mongodb", () => {
  const mockMongoClient = {
    connect: jest.fn(),
    close: jest.fn(),
    db: jest.fn(),
  };
  return {
    MongoClient: jest.fn(() => mockMongoClient),
  };
});

describe("CnxMongoDB", () => {
  let consoleLogSpy;

  beforeAll(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterAll(() => {
    consoleLogSpy.mockRestore();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("connect", () => {
    it("debería establecer la conexión con MongoDB correctamente", async () => {
      await CnxMongoDB.connect();

      expect(mongoClient.MongoClient).toHaveBeenCalledWith(config.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      expect(mongoClient.MongoClient().connect).toHaveBeenCalled();
      expect(mongoClient.MongoClient().db).toHaveBeenCalledWith(config.BASE);
      expect(CnxMongoDB.connection).toBe(true);
    });

    it("debería manejar el error en caso de fallo en la conexión", async () => {
      const mockError = new Error("Error de conexión");
      mongoClient.MongoClient().connect.mockRejectedValue(mockError);

      await CnxMongoDB.connect();

      expect(mongoClient.MongoClient).toHaveBeenCalledWith(config.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      expect(consoleLogSpy).toHaveBeenCalledWith(mockError.message);
    });
  });

  describe("disconnect", () => {
    it("debería cerrar la conexión si existe una conexión establecida", async () => {
      CnxMongoDB.connection = true;

      await CnxMongoDB.disconnect();

      expect(mongoClient.MongoClient().close).toHaveBeenCalled();
    });

    it("no debería cerrar la conexión si no existe una conexión establecida", async () => {
      CnxMongoDB.connection = false;

      await CnxMongoDB.disconnect();

      expect(mongoClient.MongoClient().close).not.toHaveBeenCalled();
    });
  });
});

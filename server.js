import express from "express"
import cors from "cors";
import { EntityRouter } from "./router/entityRouter.js"
import config from "./config.js"
import { CnxMongoDB } from "./model/cnxMongoDB.js"

const app = express();
app.use(cors());
app.use("/entity", new EntityRouter().start())

if (config.DB == "MONGO") {
  await CnxMongoDB.connect()
  if(CnxMongoDB.connection)
    console.log(':::::::: Base de Datos conectada ::::::::')
}

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
server.on("error", (error) => console.log(`Error en servidor: ${error.message}`))
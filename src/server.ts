import "reflect-metadata";
import 'dotenv/config'
import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import routers from "./app/routes/routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routers);

AppDataSource.initialize().then(async () => {
    console.log("Database OK");
    app.listen( process.env.PORT_SERVER || 3000, () => console.log("Server started on port 3000"));
})



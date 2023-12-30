import "reflect-metadata"
import 'dotenv/config'
import { DataSource } from "typeorm";
import { CreateResultadoTable1641110593081 } from "./migrations/1703891219417-CreateResultTable";
import { Resultado } from "../app/entities/Result";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST_DB,
    port: 5433,
    username: process.env.USERNAME_DB,
    password: process.env.PASSAWORD_DB,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    entities: [Resultado],
    migrations: [CreateResultadoTable1641110593081],
    subscribers: []
})

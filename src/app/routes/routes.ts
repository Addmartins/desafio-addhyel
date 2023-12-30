import { Router } from "express";
import resultRouter from "../controllers/ResultControlles";

const routers = Router();

routers.use('/resultados', resultRouter);

export default routers;
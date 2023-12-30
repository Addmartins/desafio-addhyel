import { Resultado } from "../entities/Result";
import { IResult } from "../interface/IResult";
import { AppDataSource } from "../../database/data-source";
import { DeleteResult } from "typeorm";

const resultRepository = AppDataSource.getRepository(Resultado);

const getResult = (): Promise<IResult[]> => {
    return resultRepository.find();
};

const postResult = (newResult: Resultado): Promise<IResult> => {
    return resultRepository.save(newResult);
}

const deleteResult = (id: string): Promise<DeleteResult> => {
    return resultRepository.delete(id);
}


export default {
    getResult,
    postResult,
    deleteResult
}
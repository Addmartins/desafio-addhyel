import { Request, Response, Router } from "express";
import { Resultado } from "../entities/Result";
import ResultRepository from "../repositories/ResultRepository";
import { Bimestre, Disciplina } from "../interface/IResult";

const resultRouter = Router();

resultRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const resultados = await ResultRepository.getResult();

    return res.status(200).json(resultados);
});



resultRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
    try {
       
        const { bimestre, disciplina, nota }: { bimestre: Bimestre; disciplina: Disciplina; nota: number } = req.body;

        if (nota < 0 || nota > 10) {
            return res.status(400).json({ error: 'A nota deve estar entre 0 e 10.' });
        }

        const newResult: Omit<Resultado, 'id'> = {
            bimestre,
            disciplina,
            nota,
            criadoEm: new Date(),
            atualizadoEm: new Date()
        };

        
        const resultadoSalvo = await ResultRepository.postResult(newResult  as Resultado);

        return res.status(201).json(resultadoSalvo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

resultRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;

    try {

        const deleteResult = await ResultRepository.deleteResult(id);

        if(deleteResult.affected === 0) {
            return res.status(404).json({ error: "Resultado não encontrado." })
        }

        return res.json({ message: "Resultado deletado com sucesso." })

        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro interno do servidor.' });
    }

});

export default resultRouter;
import {MigrationInterface, QueryRunner} from "typeorm";

enum Bimestre {
  PRIMEIRO = 'PRIMEIRO',
  SEGUNDO = 'SEGUNDO',
  TERCEIRO = 'TERCEIRO',
  QUARTO = 'QUARTO',
}

enum Disciplina {
  BIOLOGIA = 'Biologia',
  ARTES = 'Artes',
  GEOGRAFIA = 'Geografia',
  SOCIOLOGIA = 'Sociologia',
}

export class CreateResultadoTable1641110593081 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "resultado" (
                "id" uuid PRIMARY KEY,
                "bimestre" varchar NOT NULL,
                "disciplina" varchar NOT NULL,
                "nota" double precision NOT NULL CHECK (nota >= 0 AND nota <= 10),
                "criadoEm" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "atualizadoEm" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "resultado"`);
    }

}


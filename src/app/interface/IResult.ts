
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
  
  interface IResult {
    id?: number;
    bimestre: Bimestre;
    disciplina: Disciplina;
    nota: number;
    criadoEm: Date;
    atualizadoEm: Date;
  }
  
  export { IResult, Bimestre, Disciplina };
  
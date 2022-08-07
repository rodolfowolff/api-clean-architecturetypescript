/* 
  ENTIDADE = REGRAS DE NEGOCIO NÂO DEPENDEM DE OUTROS 'RECURSOS'
*/

export type SectorType = { id: number; name: string };

export type UserType = {
  id: number;
  firtname: string;
  lastname: string;
  telephone: string;
  password: string;
  sector: SectorType[];
  daysService?: number[];
  status: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
};

export class User {
  public props: Required<UserType>; // Required = Todos os campos obrigatórios
  // CONSTRUTOR GERA UM OBJETO USUARIO
  constructor(props: UserType) {
    this.props = {
      ...props,
      daysService: props.daysService || [], // Se não tiver daysService, atribui um array vazio
    };
  }
}

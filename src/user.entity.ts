/* 
  ENTIDADE = REGRAS DE NEGOCIO NÂO DEPENDEM DE OUTROS 'RECURSOS'
*/

export type SectorType = { id: number; name: string };

export type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  telephone: string;
  password: string;
  sector: SectorType[];
  daysService?: number[];
  status: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
};

export type UserInfo = {
  firstname?: string;
  lastname?: string;
  telephone?: string;
};

export class User {
  public props: Required<UserType>; // Required = Todos os campos obrigatórios
  // CONSTRUTOR GERA UM OBJETO USUARIO
  constructor(props: UserType) {
    this.props = {
      ...props,
      daysService: props.daysService || [], // Se não tiver daysService, atribui um array vazio
      deleted_at: props.deleted_at || null, // Se não tiver deleted_at, atribui null
    };
  }

  // METODOs PARA ATUALIZAR OS DADOS DO USUARIO
  updateUserInfo(userinfo: UserInfo) {
    this.props = {
      ...this.props,
      firstname: userinfo.firstname || this.props.firstname,
      lastname: userinfo.lastname || this.props.lastname,
      telephone: userinfo.telephone || this.props.telephone,
    };
  }

  updateSector(sector: SectorType) {
    // AQUI FICA AS VALIDAÇÕES, ALTERAÇÕES, ETC
    this.props.sector = [sector];
  }

  updateDaysService(daysService: number[]) {
    // AQUI FICA AS VALIDAÇÕES, ALTERAÇÕES, ETC
    this.props.daysService = daysService;
  }

  // GET PODE SER PUBLIC = PODE SER ACESSADO FORA DA CLASSE
  get userinfo() {
    return {
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      telephone: this.props.telephone,
    };
  }

  // SET SOMENTE PRIVADO = NÃO PODE SER ACESSADO FORA DA CLASSE
  private set userinfo(userinfo: UserInfo) {
    this.props.firstname = userinfo.firstname || this.props.firstname;
    this.props.lastname = userinfo.lastname || this.props.lastname;
    this.props.telephone = userinfo.telephone || this.props.telephone;
  }
}

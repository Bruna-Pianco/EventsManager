export interface ILogin{
    user: {
      _id: number,
      username: string,
      password: string,
      ativo: boolean,
      status_adm: boolean
    },
    token: string
  }
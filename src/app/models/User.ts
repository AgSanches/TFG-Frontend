export class User {

  constructor(
    public name: string,
    public surname: string,
    public email :string,
    public password: string,
    public access_token: string,
    public refresh_token:string
  ) {}


}

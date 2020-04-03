export class Dog {

  constructor(
    public id: number,
    public name: string,
    public bread: string,
    public gender: string,
    public birth:string,
    public weight: number,
    public height: number,
    public photo_path: string,
    public observations: Array<string>,
    public updated_at: string,
    public created_at: string,
    // TODO crear modelo observación, sesión y toma.
  ) {
  }

}

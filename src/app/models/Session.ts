import {Toma} from './Toma';

export class Session {

  constructor(
    public id: number,
    public name: string,
    public dog_id: number,
    public conclusion_ia: string,
    public conclusion_expert: string,
    public created_at: string,
    public updated_at:string,
    public tomas: Array<Toma>

  ) {
  }

}

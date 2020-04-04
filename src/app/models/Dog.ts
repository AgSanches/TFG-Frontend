import {DogObservation} from './DogObservation';
import {Session} from './Session';

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
    public updated_at: string,
    public created_at: string,
  ) {
  }

}

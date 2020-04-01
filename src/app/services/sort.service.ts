import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() {

  }

  sortArrayByName(model:Array<any>, ascendent: boolean){
   return model.sort( (a, b) => {
      if(a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        if (ascendent) {
          return -1;
        } else {
          return 1
        }
      }
      else if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()){
        if (ascendent) {
          return 1;
        } else {
          return -1
        }
      }
      else return 0
    });
  }

  sortByDate(model:Array<any>, ascendent: boolean){

      return model.sort( (a:any, b:any) => {

        let dateA = new Date(a.updated_at);
        let dateB = new Date(b.updated_at);

        if(dateA >= dateB) {

          if(ascendent){
            return 1;
          }else {
            return -1
          }

        }else {

          if(ascendent){
            return -1;
          }else {
            return 1
          }

        }
      });
  }


  sort(model: Array<any>, date: boolean, asc: boolean){
    if (date){
      return this.sortByDate(model, asc);
    }
    return this.sortArrayByName(model, asc);
  }

}

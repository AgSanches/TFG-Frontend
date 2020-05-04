export interface User {
     id?:string;
     name: string;
     surname: string;
     email :string;
     password?: string;
     access_token?: string;
     refresh_token?:string;
     role?: number
}

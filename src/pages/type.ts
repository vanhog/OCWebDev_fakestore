export interface LoginData {
  username: string;
  password: string;
}



export interface LoginResponse {
  token: string;
}

export type User = {
   id: number;
   username: string;
   email: string;
   password: string;
 };

 export type RegisterData = {
    email: string,
    username : string,
    password : string,
    firstName : string,
    lastName : string,
    phoneCountryCode: string,
    phoneNumber: string,
    address: {
        street: string;
        houseNumber: string;
        city: string;
        country: string;
        zipCode: string;
    },
 }
 
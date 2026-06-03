export interface LoginData {
  username: string;
  password: string;
}

export interface RegisterData {
  email: string;
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

// export type User = {
//   id: number;
//   username: string;
//   email: string;
//   password: string;
// };
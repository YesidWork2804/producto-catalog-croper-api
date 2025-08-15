export interface UserResponse {
  _id: string;
  email: string;
  nombre: string;
  activo: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: {
    id: string;
    email: string;
    nombre: string;
  };
}

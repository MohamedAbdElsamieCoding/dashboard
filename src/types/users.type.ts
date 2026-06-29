export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;

  age: number;
  gender: string;

  email: string;
  phone: string;
  company?: {
    name: string;
    title: string;
  };

  username: string;
  password: string;

  birthDate: string;
  image: string;

  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;

  ip: string;
  macAddress: string;
  university: string;

  ein: string;
  ssn: string;
  userAgent: string;
};

export type UsersResponse = {
  users: User[];

  total: number;
  skip: number;
  limit: number;
};
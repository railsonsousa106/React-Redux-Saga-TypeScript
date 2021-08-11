export interface PayloadSignUpWithEmail {
  email: string;
  password: string;
  actionHandler: () => void;
}

export interface AuthStatus {
  authStatus: boolean;
}

export interface Error {
  error: string | null;
}

export interface IsFetching {
  isFetching: boolean;
}

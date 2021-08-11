export interface Action<T = {}> {
  type: string;
  payload?: T;
}

export interface SagaAction<T = {}> {
  type: string;
  payload: T;
}

export interface PayloadData<T> {
  data: T;
}

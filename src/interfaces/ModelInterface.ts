export interface Model<T> {
  create(entiry: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(id: string): Promise<T | null>;
  update(id: string, entiry: T): Promise<T | null>;
  delete(id: string): Promise<T | null>;
}

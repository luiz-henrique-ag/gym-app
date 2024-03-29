export interface IService<T>{
  post(entity: T) : boolean
  get(searchString: string, pageNumber: number) : Promise<T[] | undefined>
  getById() : T | undefined
  update(entity: T) : boolean
  delete(entity: T) : boolean
}
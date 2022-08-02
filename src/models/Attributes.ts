export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key]
  }

  set(update: T): void {
    Object.assign(this.data, update)
  }

  getAll(): T {
    return this.data;
  }
}

//K is name age or ID T is type User Props
//k extends key of t says we can only call get with name age or id
//T[K] says look at the interface of T and return value at the key of k


//k can only ever be namer age or id (we are using user props as T since only type in application thus far)

//interface is the structure of an object

//goal is for typescript to understand that whenn we call stirng name we will return a string

//k extends keyof t is a generic constraint limits types that k can be
//value of k can only be one of the keys of t

//if T is user props k can only be name age or id

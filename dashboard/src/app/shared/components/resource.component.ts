import { ApiService } from "../services/api.service";

export class ResourceComponent<T, R extends ApiService<T>> {
  
  private resources :T[];

  constructor(protected endPoint :R){}

  public getResources() :T[] {
    return this.resources
  }

  public setResources(datas :T[]) :void {
    this.resources = datas;
  }
  
}
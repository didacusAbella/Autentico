export class Clothing {

  public id: string;
  public name: string;
  public defect: boolean;
  public img: string;
  public brand: number;
  public collection: number;
  public description: string;

  constructor(options: any){
    this.id = options.id;
    this.name = options.name;
    this.defect = options.defect;
    this.img = options.img;
    this.brand = options.brand;
    this.collection = options.collection;
    this.description = options.description;
  }  
}
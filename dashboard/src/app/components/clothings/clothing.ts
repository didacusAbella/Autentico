export class Clothing {

  public id: string;
  public name: string;
  public defect: boolean;
  public img: string;

  constructor(options: any){
    this.id = options.id;
    this.name = options.name;
    this.defect = options.defect;
    this.img = options.img;
  }  
}
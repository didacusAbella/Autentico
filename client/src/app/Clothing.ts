export class Clothing {

  public id: string;
  public name: string;
  public defect: boolean;
  public img: string;
  public brand: string;
  public description: string;
  public season:string;
  public year:string;

  constructor(options: any){
    this.id = options.id;
    this.name = options.name;
    this.defect = options.defect;
    this.img = options.img;
    this.brand = options.brand;
    this.description = options.description;
    this.season = options.season;
    this.year = options.year;
  }  
}
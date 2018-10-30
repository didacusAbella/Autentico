export class Clothing {
  
  public id :string;
  public name :string;
  public collection_fk :number;
  public brand_fk :number;
  public description :string;
  public defect :boolean;
  
  constructor(parameters: any) {
    this.id = parameters.id;
    this.name = parameters.name;
    this.collection_fk = parameters.collection_fk;
    this.brand_fk = parameters.brand_fk;
    this.description = parameters.description;
    this.defect = parameters.defect;
  }
  
}
export class Clothing {
  
  public id :string;
  public name :string;
  public collectionFk :number;
  public brandFk :number;
  public description :string;
  public defect :boolean;
  
  constructor(parameters: any) {
    this.id = parameters.id;
    this.name = parameters.name;
    this.collectionFk = parameters.collection_fk;
    this.brandFk = parameters.brand_fk;
    this.description = parameters.description;
    this.defect = parameters.defect;
  }
  
}
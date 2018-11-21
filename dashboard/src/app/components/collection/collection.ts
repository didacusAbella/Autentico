export class Collection {

  public readonly id: number;
  public season: string;
  public year: string;

  constructor(options){
    this.id = options.id;
    this.season = options.season;
    this.year = options.year;
  }

}
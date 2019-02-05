export class Collection {

  public id: number;
  public season: string;
  public year: string;

  constructor(params) {
    this.id = params.id;
    this.season = params.season;
    this.year = params.year;
  }
}
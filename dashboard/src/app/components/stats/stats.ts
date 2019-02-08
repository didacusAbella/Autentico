export class Stats {

  public description: string;
  public numericValue: string;
  public percentage: string;

  constructor(description: string, numericValue: string, percentage?: string){
    this.description = description;
    this.numericValue = numericValue;
    this.percentage = percentage;
  }
}
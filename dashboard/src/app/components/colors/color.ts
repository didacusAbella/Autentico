export class Color {
  public id :number;
  public hex :string;

  constructor(options :any){
    this.id = options.id;
    this.hex = options.hex;
  }
}
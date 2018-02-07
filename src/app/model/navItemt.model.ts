export class NavItemt {
  public name: string;
  public desc: string;
  public href: string;
  public isCheck: boolean;

  constructor( name: string,
               desc: string,
               href: string,
               isCheck: boolean) {
    this.name = name;
    this.desc = desc;
    this .href = href;
    this .isCheck = isCheck;

  }
}

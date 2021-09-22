export default class Project {
  public url: string;
  public name: string;
  public description: string;

  constructor(url: string, name: string, description: string) {
    this.url = url;
    this.name = name;
    this.description = description;
  }
}

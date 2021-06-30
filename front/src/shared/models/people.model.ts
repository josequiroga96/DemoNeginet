export class PeopleModel {
  id: number;
  name: string;

  constructor(id: number | undefined, name: string) {
    this.id = id ? id : 0;
    this.name = name;
  }

  static fromJsonObject(jsonObject: any): PeopleModel {
    return new PeopleModel(jsonObject.id, jsonObject.name);
  }
}

import { Model } from "sequelize";

export class ITodo extends Model {
  public id: number;
  public name: string;
  public isactive: boolean;
}
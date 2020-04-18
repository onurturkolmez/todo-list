import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';
import { ITodo } from 'Interfaces/Models/Todo';

@Table({ timestamps: false, tableName: 'todo', freezeTableName: true })
export class Todo extends Model<ITodo> {

  @PrimaryKey
  @Column id!: number;
  @Column name: string;
  @Column isactive: boolean;
}
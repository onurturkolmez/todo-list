import { Table, Column, Model, DataType, PrimaryKey } from 'sequelize-typescript';
import { ITodo } from 'Interfaces/Models/Todo';

@Table({ timestamps: false, tableName: 'todo', freezeTableName: true })
export class Todo extends Model<ITodo> {

  @PrimaryKey
  @Column id: string;
  @Column name: string;
  @Column isActive: boolean;
}
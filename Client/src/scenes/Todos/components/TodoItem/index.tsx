import React from 'react';
import './index.css';
import { Props } from './types';

const TodoItem = ({
  item
}: Props) => {
  return (
    <div
      className="tdl-item">
      <span>{item.name}</span>
      <span
        className="date">{item.description}</span>
    </div>
  )
}

export default TodoItem;
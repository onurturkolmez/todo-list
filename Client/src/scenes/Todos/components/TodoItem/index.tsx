import React, { useEffect, useState, useLayoutEffect } from 'react';
import './index.css';
import { Props, connector } from './types';
import Loader from '../../../../components/Loader';
import AddTodoItem from '../AddTodoItem';
import { MoreIcon, PenIcon, TrashIcon, OkIcon } from '../../../../components/Icons';
import { useHistory } from 'react-router-dom';

function TodoItem(props: Props) {

  const [todoItemName, updateTodoItemName] = useState('');
  const [showControls, toggleControls] = useState(false);

  const { todoId } = props;
  const history = useHistory();

  useEffect(() => {
    props.getTodoItems(todoId);
  }, []);

  if (!props.todoItem[todoId]) return (<Loader />);


  return (
    <>
      {
        props.todoItem[todoId].items.map((item: any) => (
          <div
            onClick={() => history.push({ pathname: `/todos/${item.id}`, state: { todoItem: item } })}
            key={item.id}
            className="tdl-item">
            <span>{item.name}</span>

            <span
              className="dropdown">
              <li>
                <MoreIcon />
                <ul>
                  <li>
                    <a href="#">
                      <PenIcon />Update
                    </a>
                  </li>
                  <li>
                    <a href="#"
                      onClick={() => { props.deleteTodoItem(item.id) }}>
                      <TrashIcon />Delete
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <OkIcon />Mark as Done
                    </a>
                  </li>
                </ul>
              </li>
            </span>

            {/* <span
              className="date">{item.description}</span> */}
          </div>
        ))
      }

      <AddTodoItem
        name={todoItemName}
        showControls={showControls}
        toggleControls={() => toggleControls(!showControls)}
        addClick={() => {
          props.addTodoItem(todoId, todoItemName);
        }}
        onChangeName={(e: any) => updateTodoItemName(e.target.value)}
        title={Number(props.todoItem[todoId].items.length) > 0 ? `Add Another Todo Item` : `Add Todo Item`}
      />
    </>
  )
}

export default connector(TodoItem); 
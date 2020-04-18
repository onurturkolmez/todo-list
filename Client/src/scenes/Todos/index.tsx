import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Props, connector } from './types';
import { withRouter } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import Loader from '../../components/Loader';
import { ITodo } from '../../Interfaces/States';
import AddTodo from './components/AddTodo';

function Todos(props: Props) {

  const [todoName, updateTodoName] = useState('');

  useLayoutEffect(() => {
    //Only one wrapper (there is always one field to add new one)
    const wrapperElement = document.getElementsByClassName("add-wrapper")[0];
    const formElements = document.getElementsByClassName("controls");

    Array.prototype.forEach.call(formElements, element => {
      element.addEventListener('click', (e: any) => {
        e.stopPropagation();
      })
    });

    // Toggle Elements UI Features Set

    const toggleElements = document.getElementsByClassName("open-add");
    Array.prototype.forEach.call(toggleElements, element => {
      element.addEventListener('click', (e: any) => {
        e.stopPropagation();
        if (wrapperElement.classList.contains('is-idle')) {
          wrapperElement.classList.remove('is-idle');
        } else {
          wrapperElement.classList.add('is-idle');
        }
      });
    });

    document.addEventListener('click', (e) => {
      e.stopPropagation();
      if (wrapperElement && !wrapperElement.classList.contains('is-idle')) {
        wrapperElement.classList.add('is-idle');
      }
    });
  })

  useEffect(() => {

    props.getTodos();
  }, [])

  const { loading, todos } = props.todo;
  
  if (loading) return (<Loader />);

  console.log(todos[0].items);

  return (
    <>
      {
        todos.map((todo: ITodo) => (
          <ToDoList
            key={todo.id}
            todo={todo}
            deleteTodo={() => {
              props.deleteTodo(todo.id);
              props.getTodos();
            }}
          />
        ))
      }
      <AddTodo
        name={todoName}
        addClick={() => {
          props.addTodo(Object.assign({}, { name: todoName }));
          props.getTodos();
          updateTodoName('');
        }}
        onChangeName={(e: any) => {
          updateTodoName(e.target.value)
        }}
      />
    </>

  )
}

export default withRouter(connector(Todos));
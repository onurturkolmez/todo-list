import { RouteComponentProps } from 'react-router-dom';
import { IInitialState } from '../../Interfaces/States';
import { connect, ConnectedProps } from 'react-redux';
import { getTodos, deleteTodo, addTodo } from '../../actions/todo';

const mapStateToProps = ({ todo }: IInitialState) => ({ todo });

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTodos: () => {
      dispatch(getTodos())
    },
    deleteTodo: (todoId: string) => {
      dispatch(deleteTodo(todoId))
    },
    addTodo: (todo: any) => {
      dispatch(addTodo(todo))
    }
  }
}

export const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

export type Props = RouteComponentProps & PropsFromRedux
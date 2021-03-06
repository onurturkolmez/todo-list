import { RouteComponentProps } from 'react-router-dom';
import { IInitialState } from '../../Interfaces/States';
import { connect, ConnectedProps } from 'react-redux';
import { getTodos, deleteTodo } from '../../actions/todo';

const mapStateToProps = ({ todo }: IInitialState) => ({ todo });

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTodos: () => {
      dispatch(getTodos())
    },
    deleteTodo: (todoId: string) => {
      dispatch(deleteTodo(todoId))
    }
  }
}

export const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type todoItem = {
  item: any
}

export type Props = RouteComponentProps & PropsFromRedux
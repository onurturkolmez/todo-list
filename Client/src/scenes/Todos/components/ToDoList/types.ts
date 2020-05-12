import { ITodo, IInitialState } from "../../../../Interfaces/States";
import { connect, ConnectedProps } from 'react-redux';
import { updateTodo } from "../../../../actions/todo";


const mapDispatchToProps = (dispatch: any) => {
  return {
    updateTodo: (todoName: string, todoId: string) => {

      let todo: any = { name: todoName, id: todoId }
      dispatch(updateTodo(todo))
    }
  }
}

export const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type StateProps = {
  todo: ITodo
  deleteTodo: () => void
}

export type Props = StateProps & PropsFromRedux;
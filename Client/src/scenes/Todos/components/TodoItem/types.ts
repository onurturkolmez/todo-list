import { IInitialState } from '../../../../Interfaces/States';
import { connect, ConnectedProps } from 'react-redux';
import { getTodoItems, addTodoItem, deleteTodoItem } from '../../../../actions/todoItem';

const mapStateToProps = ({ todoItem }: IInitialState) => ({ todoItem });

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTodoItems: (todoId: string) => {
      dispatch(getTodoItems(todoId))
    },
    addTodoItem: (todoId: string, itemName: string) => {

      let item: any = { name: itemName, id: todoId }
      dispatch(addTodoItem(item))
    },
    deleteTodoItem: (id: string) => {
      dispatch(deleteTodoItem(id))
    }
  }
}

export const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type StateProps = {
  todoId: string
}

export type Props = StateProps & PropsFromRedux;
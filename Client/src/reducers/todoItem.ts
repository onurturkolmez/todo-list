import { GET_TODO_ITEMS, GET_TODO_ITEMS_SUCCESS, GET_TODO_ITEMS_FAIL } from "../constants/ActionTypes";

const initialState: any = {}

const todoItemReducer = (state = initialState, { type, payload }: any) => {

	console.log(`payload`, payload, 'type', type);

	switch (type) {

		case GET_TODO_ITEMS: {

			const todoId = payload;

			let tempState = state;
			let todoItem: any = { items: [], loading: true, msg: "" };

			tempState[todoId] = todoItem;
			
			return { ...tempState }
		}

		case GET_TODO_ITEMS_SUCCESS: {

			const { todoId, data } = payload;

			let tempState = state;

			tempState[todoId].loading = false;
			tempState[todoId].items = data;

			return { ...tempState }
		}

		case GET_TODO_ITEMS_FAIL: {

			const { todoId, msg } = payload;

			let tempState = state;
			tempState[todoId].loading = false;
			tempState[todoId].items = [];
			tempState[todoId].msg = msg;

			return { ...tempState }
		}

		default:
			return state;
	}
}

export default todoItemReducer;
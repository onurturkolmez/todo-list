const baseUrl = 'http://localhost:5000';

export const getTodosUrl = `${baseUrl}/todo/list`;
export const getTodoItemUrl = (todoId: string) => (`${baseUrl}/todoItem/list/${todoId}`);
export const deleteTodoUrl = (todoId: string) => `${baseUrl}/todo/delete/${todoId}`;
export const deleteTodoItemUrl = (todoItemId: string) => `${baseUrl}/todoItem/delete/${todoItemId}`;
export const addTodoUrl = `${baseUrl}/todo/add`;
export const updateTodoUrl = `${baseUrl}/todo/update`;
export const addTodoItemUrl = `${baseUrl}/todoItem/add`;
export const loginUrl = `${baseUrl}/user/login`;
const baseUrl = 'http://localhost:5000';

export const getTodosUrl = `${baseUrl}/todo/list`;
export const deleteTodoUrl = (todoId: string) => `${baseUrl}/todo/delete/${todoId}`;
export const addTodoUrl = `${baseUrl}/todo/add`;
export const loginUrl = `${baseUrl}/user/login`;
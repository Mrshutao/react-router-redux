export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

let nextTodoId = 0;
export const addNote = (title, text) => ({
	type: ADD_NOTE,
	id: nextTodoId++,
	title: title,
	note: text,
});
export const deleteNote = id => ({
	type: DELETE_NOTE,
	id: id,
});

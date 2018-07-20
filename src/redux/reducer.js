import { ADD_NOTE, DELETE_NOTE } from './actions';
export const login = (state = { name: '舒涛' }) => {
	return state;
};

export const notes = (state = [], action) => {
	//每一次的操作无论是添加、删除还是初始化，全部的笔记内容会被重新更新一次
	switch (action.type) {
		case ADD_NOTE:
			return [
				...state,
				{
					id: action.id,
					title: action.title,
					note: action.note,
				},
			];
		case DELETE_NOTE:
			var newState = [];
			state.map((note, index) => {
				if (note.id !== action.id) {
					newState.push(note);
				}
				return note;
			});
			return newState;
		default:
			return state;
	}
};

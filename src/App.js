import React from 'react';
import './App.css';
import Todolist from './Todolist';

const initialState = {
	todos: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'add': {
			const fakeId = Date.now();
			const newTodo = {
				title: action.title,
			};
			return {
				...state,
				todos: [...state.todos, { ...newTodo, id: fakeId }],
			};
		}
		case 'remove': {
			return {
				...state,
				todos: state.todos.filter((i) => i.id !== action.id),
			};
		}
		default:
			return state;
	}
};

const App = () => {
	const [title, setTitle] = React.useState('');
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const addTodo = (e) => {
		e.preventDefault();
		dispatch({ type: 'add', title });
		setTitle('');
	};
	const removeTodo = (id) => {
		dispatch({ type: 'remove', id });
	};

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	return (
		<form>
			<div style={{ width: '100%', textAlign: 'center', marginTop: 20 }}>
				<input
					style={{
						outline: 'none',
						borderRadius: 5,
						height: 30,
						border: '1px solid black',
					}}
					type='text'
					onChange={handleChange}
					value={title}
				/>
				<button
					style={{
						border: 'none',
						outline: 'none',
						borderRadius: '50%',
						height: 35,
						width: 35,
						background: 'ligthgreen',
					}}
					onClick={addTodo}>
					+
				</button>
			</div>
			<Todolist removeTodo={removeTodo} todos={state.todos} />
		</form>
	);
};

export default App;

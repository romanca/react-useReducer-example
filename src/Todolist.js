import React from 'react';

const Todolist = ({ todos, removeTodo }) => {
	return (
		<div>
			{todos.map((todo) => (
				<div
					key={todo.id}
					style={{
						width: '100%',
						textAlign: 'center',
						marginTop: 20,
						display: 'flex',
					}}>
					<div style={{ width: '100%', textAlign: 'center' }}>
						{todo.title}
						<button onClick={() => removeTodo(todo.id)}>X</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Todolist;

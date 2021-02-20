import React from 'react';

const Todolist = ({ todos, removeTodo }) => {
	return (
		<div>
			{todos.map((todo) => (
				<div
					key={todo.id}
					style={{
						width: '100%',
						height: 50,
						textAlign: 'center',
						marginTop: 20,
						display: 'flex',
					}}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							textAlign: 'center',
							border: '1px solid black',
							marginLeft: 400,
							marginRight: 400,
							borderRadius: 5,
							padding: 10,
						}}>
						<div>{todo.title}</div>
						<button
							style={{
								width: 30,
								height: 20,
								outline: 'none',
								border: 'none',
								background: 'tomato',
								borderRadius: 5,
							}}
							onClick={() => removeTodo(todo.id)}>
							X
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Todolist;

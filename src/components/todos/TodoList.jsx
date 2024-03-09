import React from "react";
import { Todo } from "./Todo";
import styles from "./TodoList.module.css";

export const TodoList = ({ todos, onDeletTodo, onToggle }) => {
	return (
		<div className={styles.todoListContainer}>
			{todos.map((todo) => (
				<Todo
					todo={todo}
					key={todo.id}
					onDeletTodo={onDeletTodo}
					onToggle={onToggle}
				/>
			))}
		</div>
	);
};

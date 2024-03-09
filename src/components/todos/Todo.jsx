import React from "react";
import styles from "./Todo.module.css";
import { RiTodoFill, RiDeleteBack2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

export const Todo = ({ todo, onDeletTodo, onToggle }) => {
	return (
		// props ко тиешеси жок
		// klass
		<div
			className={`${styles.todo} ${
				todo.isCompleted && styles.isCompletedTodo
			}`}>
			<RiTodoFill className={styles.todoIcon} />
			<div>{todo.text}</div>
			<RiDeleteBack2Line
				className={styles.deleteIcon}
				onClick={() => onDeletTodo(todo.id)}
			/>
			<FaCheck className={styles.checkIcon} onClick={() => onToggle(todo.id)} />
		</div>
	);
};

import React, { useState } from "react";
import styles from "./TodoForm.module.css";

export const TodoForm = ({ onAddTodo }) => {
	const [enteredValue, setEnteredValue] = useState("");
	const submitHandler = (event) => {
		event.preventDefault();
		onAddTodo(enteredValue);
		setEnteredValue("");
	};
	return (
		<div className={styles.todoFormConatiner}>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={enteredValue}
					className={styles.input}
					onChange={(e) => setEnteredValue(e.target.value)}
					placeholder="Введите текст"
				/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

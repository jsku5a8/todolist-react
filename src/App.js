import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/todos/TodoList";
import { TodoForm } from "./components/todos/TodoForm";
import uuid from "react-uuid";
import { TodosActions } from "./components/todos/TodosActions";
import { isCompositeComponent } from "react-dom/test-utils";

const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodoHandler = (text) => {
		console.log(text, "app");
		const newTodo = {
			text: text,
			isCompleted: false,
			id: uuid(),
		};
		setTodos([...todos, newTodo]);
	};

	const deleteTodoHandler = (id) => {
		// const exchangeTodos = todos.filter((todo) => todo.id !== id);
		// setTodos(exchangeTodos);
		setTodos(todos.filter((item) => item.id !== id));
	};

	const toggleTodoHandler = (id) => {
		// const exchangeTodos = todos.map((todo) => {
		// 	if (todo.id === id) {
		// 		return { ...todo, isCompleted: !todo.isCompleted };
		// 	}
		// 	return todo;
		// });
		// setTodos(exchangeTodos);
		setTodos(
			todos.map((todo) => {
				return todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo };
			})
		);
	};

	const resetTodosHandler = () => {
		setTodos([]);
	};

	const deleteCompletedTodosHandler = () => {
		setTodos(todos.filter((item) => !item.isCompleted));
	};

	const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
	return (
		<>
			<div className="App">
				<h1>Todo App</h1>
				<TodoForm onAddTodo={addTodoHandler} />
				{!!todos.length && (
					<TodosActions
						resetTodosHandler={resetTodosHandler}
						deleteCompletedTodosHandler={deleteCompletedTodosHandler}
						isExistingCompleted={!!completedTodosCount}
					/>
				)}
				<TodoList
					todos={todos}
					onDeletTodo={deleteTodoHandler}
					onToggle={toggleTodoHandler}
				/>
				{!!completedTodosCount > 0 && (
					<h2>
						You have to completed {completedTodosCount}
						{completedTodosCount > 1 ? "todos" : "todo"}
					</h2>
				)}
			</div>
		</>
	);
};

export default App;

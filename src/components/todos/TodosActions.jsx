import React from "react";
import { Button } from "./Button";
import { RiDeleteBack2Line, RiRefreshLine } from "react-icons/ri";

export const TodosActions = ({
	resetTodosHandler,
	deleteCompletedTodosHandler,
	isExistingCompletedTodo,
}) => {
	return (
		<div>
			<Button onClick={resetTodosHandler}>
				<RiDeleteBack2Line />
			</Button>
			<Button
				onClick={deleteCompletedTodosHandler}
				disabled={!isExistingCompletedTodo}>
				<RiRefreshLine />
			</Button>
		</div>
	);
};

import { reactive } from "vue";
import { AsyncData } from "../../types/AsyncData";
import { Todo } from "../../services/Todo";
import TodoListService from "../../services/TodoListService";

export default function useTodoList(): AsyncData<Todo[]> {
	const todoListService = new TodoListService();

	const value = reactive<AsyncData<Todo[]>>({
		isLoading: true,
		error: null,
		data: []
	});

	todoListService.getAllTodos()
		.then(todos => {
			value.isLoading = false;
			value.error = null;
			value.data = todos;
		})
		.catch((error) => {
			value.isLoading = false;
			value.error = error || "An unknown error occurred while retrieving todo items";
			value.data = null;
		});

	return value;
}

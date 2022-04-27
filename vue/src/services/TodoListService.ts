import axios from "axios";
import { Todo } from "./Todo";

export default class TodoListService {
	getAllTodos(): Promise<Todo[]> {
		console.log("retrieving all todo items");
		return axios.get("https://jsonplaceholder.typicode.com/todos")
			.then(({ data }) => data.slice(0, 10));
	}
}

import axios from "axios";
import { Todo } from "./Todo";

// https://jsonplaceholder.typicode.com/
export default class PlaceholderService {
	getAllTodos(): Promise<Todo[]> {
		console.log("retrieving all todo items");
		return axios.get("https://jsonplaceholder.typicode.com/todos");
	}

	getTodo(id: number): Promise<Todo> {
		console.log(`retrieving todo item ${id}`);
		return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
	}
}

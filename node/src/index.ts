import PlaceholderService from "./services/todo-list/PlaceholderService";

const service = new PlaceholderService();
service.getAllTodos()
	.then(console.log);

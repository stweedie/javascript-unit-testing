import PlaceholderService from "./services/placeholder/PlaceholderService";

const service = new PlaceholderService();
service.getAllTodos()
	.then(console.log);

import PlaceholderService from "./PlaceholderService";
import { Todo } from "./Todo";

export default class TodoListService {
	constructor(private placeholderService: PlaceholderService) { }

	getTodoItem(itemId: number): Promise<Todo | null> {
		if (itemId <= 0) return Promise.resolve(null);

		return this.placeholderService.getTodo(itemId);
	}
}

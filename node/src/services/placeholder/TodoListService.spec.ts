import PlaceholderService from "./PlaceholderService";
import { Todo } from "./Todo";
import TodoListService from "./TodoListService";

// class JestMockPlaceholderService implements PlaceholderService {
// 	_mockGetAllTodos = jest.fn(() => Promise.resolve([]));
// 	_mockGetTodo = jest.fn((id) => Promise.resolve({
// 		id,
// 		userId: id,
// 		title: "Some fake todo item",
// 		completed: false
// 	}));

// 	getAllTodos(): Promise<Todo[]> {
// 		return this._mockGetAllTodos();
// 	}

// 	getTodo(id: number): Promise<Todo> {
// 		return this._mockGetTodo(id);
// 	}

// 	reset() {
// 		this._mockGetAllTodos.mockRestore();
// 		this._mockGetTodo.mockRestore();
// 	}
// }

class FakePlaceholderService implements PlaceholderService {
	private createFakeTodo(id: number, completed: boolean = false): Todo {
		return {
			id,
			userId: id,
			title: `Some Fake todo item: ${id}`,
			completed
		};
	}

	getAllTodos(): Promise<Todo[]> {
		return Promise.resolve([
			this.createFakeTodo(1),
			this.createFakeTodo(2),
			this.createFakeTodo(3),
		]);
	}

	getTodo(id: number): Promise<Todo> {
		return Promise.resolve(this.createFakeTodo(id));
	}
}

describe("TodoListService", () => {
	let todoListService: TodoListService;

	// first try, using FakePlaceholderService
	beforeEach(() => {
		todoListService = new TodoListService(new FakePlaceholderService());
	});

	// second try, using JestMockPlaceholderService
	/* let mockPlaceholderService: JestMockPlaceholderService;
	beforeEach(() => {
		mockPlaceholderService = new JestMockPlaceholderService();
		todoListService = new TodoListService(mockPlaceholderService);
	});

	afterEach(() => {
		mockPlaceholderService.reset();
	}); */

	describe("getTodoItem", () => {
		it("should return null if id <= 0", async () => {
			const result = await todoListService.getTodoItem(-123);
			expect(result).toBe(null);
		});

		it("should not return null if id > 0", async () => {
			const result = await todoListService.getTodoItem(1);
			expect(result).not.toBe(null);
		});
	});
});

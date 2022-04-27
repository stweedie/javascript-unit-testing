import { defineComponent } from "vue";

import { shallowMount, mount } from "@vue/test-utils";

import { Todo } from "../../services/Todo";
import TodoList from "./TodoList.vue";
import TodoListItem from "./TodoListItem.vue";

jest.mock("./useTodoList");
import useTodoList from "./useTodoList";

const mock_useTodoList = useTodoList as any as jest.Mock<ReturnType<typeof useTodoList>>;

const createFakeTodoItem = (id: number, completed: boolean = false): Todo => ({
	id,
	userId: id,
	title: `Todo item ${id}`,
	completed
});

describe("TodoList", () => {
	it("should show LOADING while data is loading", () => {
		mock_useTodoList.mockReturnValueOnce({
			isLoading: true,
			data: null,
			error: null
		});

		const component = shallowMount(TodoList);

		const loading = component.find("#todo-list-loading");
		expect(loading.text()).toBe("Loading...");
	});

	it("should show error message if an error occurs", () => {
		const data = {
			isLoading: false,
			data: null,
			error: "an unforunate error occurred"
		};

		mock_useTodoList.mockReturnValueOnce(data);

		const component = shallowMount(TodoList);

		const error = component.find("#todo-list-error");
		expect(error.text()).toBe(data.error);
	});

	it("should render a todo-list-item-stub for each item (using shallowMount)", () => {
		const items = [
			createFakeTodoItem(1),
			createFakeTodoItem(2),
			createFakeTodoItem(3),
			createFakeTodoItem(4),
			createFakeTodoItem(5)
		];

		mock_useTodoList.mockReturnValueOnce({
			isLoading: false,
			data: items,
			error: null
		});

		const component = shallowMount(TodoList);

		// console.log(component.html());
		const todoListItems = component.findAll("todo-list-item-stub");
		expect(todoListItems.length).toBe(5);
	});

	it("should render a TodoListItem for each item (using mount)", () => {
		const items = [
			createFakeTodoItem(1),
			createFakeTodoItem(2),
			createFakeTodoItem(3),
			createFakeTodoItem(4),
			createFakeTodoItem(5)
		];

		mock_useTodoList.mockReturnValueOnce({
			isLoading: false,
			data: items,
			error: null
		});

		const component = mount(TodoList);

		// console.log(component.html());
		const todoListItems = component.findAllComponents(TodoListItem);
		expect(todoListItems.length).toBe(5);

		todoListItems.forEach((tdl, index) => {
			expect(tdl.vm.item).toStrictEqual(items[index]);
		});
	});

	it("should render a FakeTodoListItem for each item (using custom component + mount)", () => {
		const FakeTodoListItem = defineComponent({
			name: "FakeTodoItem",
			props: {
				item: {
					type: Object,
					required: true
				}
			},
			template: "<h5>{{ item.title }}</h5>"
		});

		const items = [
			createFakeTodoItem(1),
			createFakeTodoItem(2),
			createFakeTodoItem(3),
			createFakeTodoItem(4),
			createFakeTodoItem(5)
		];

		mock_useTodoList.mockReturnValueOnce({
			isLoading: false,
			data: items,
			error: null
		});

		const component = mount(TodoList, {
			components: {
				TodoListItem: FakeTodoListItem
			}
		});

		// console.log(component.html());
		const todoListItems = component.findAllComponents(FakeTodoListItem);
		expect(todoListItems.length).toBe(5);
	});
});

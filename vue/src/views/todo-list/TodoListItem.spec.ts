import { shallowMount } from "@vue/test-utils";
import { Todo } from "../../services/Todo";
import TodoListItem from "./TodoListItem.vue";

describe("TodoListItem", () => {
	it("should render todo list item correctly", () => {
		const todoItem: Todo = {
			id: 999,
			userId: 999,
			title: "some custom title",
			completed: false
		};

		const component = shallowMount(TodoListItem, {
			props: {
				item: todoItem
			}
		});

		// console.log(component.html());

		const checkbox = component.find("input");
		expect(checkbox).toBeDefined();
		expect(checkbox.element.value).toEqual(todoItem.completed.toString());

		const label = component.find("label");
		expect(label).toBeDefined();
		expect(label.text()).toBe(todoItem.title);
	});

	it("should emit removeItem event when user clicks trash icon", async () => {
		const todoItem: Todo = {
			id: 999,
			userId: 999,
			title: "some custom title",
			completed: false
		};

		const component = shallowMount(TodoListItem, {
			props: {
				item: todoItem
			}
		});

		const trashIcon = component.find("i");
		trashIcon.trigger("click");

		expect(component.emitted("removeItem")).toHaveLength(1);
	});
});

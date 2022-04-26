import { Todo } from "./Todo";

export default function markItemCompleted(item: Todo): Todo {
	item.completed = true;
	return item;
}

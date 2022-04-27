<template>
	<div class="form-check">
		<input class="form-check-input"
			type="checkbox"
			:value="item.completed"
			@input="changeItem"
			:id="item.id?.toString()">
		<label class="form-check-label" id="todo-list-item-label" :for="item.id?.toString()">
			{{ item.title }}
		</label>
		<i class="bi bi-trash-fill" @click="removeItem"></i>
	</div>

</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Todo } from "../../services/Todo";

export default defineComponent({
	name: "TodoListItem",
	props: {
		item: {
			type: Object as PropType<Todo>,
			required: true
		}
	},
	methods: {
		changeItem() {
			this.item.completed = !this.item.completed;
			this.$emit("onChanged", this.item);
		},
		removeItem() {
			this.$emit("removeItem", this.item);
		}
	}
})
</script>

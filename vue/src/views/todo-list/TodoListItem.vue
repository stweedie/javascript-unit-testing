<template>
	<div class="form-check">
		<input class="form-check-input" type="checkbox" v-model="item.completed" :id="item.id?.toString()">
		<label class="form-check-label" :for="item.id?.toString()">
			{{ item.title }}
		</label>
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
	}
})
</script>

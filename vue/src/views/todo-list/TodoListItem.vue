<template>
	<li class="list-group-item border-0 d-flex align-items-center ps-0">
		<div class="form-check">
      <input
				class="form-check-input me-3"
        type="checkbox"
        :value="item.completed"
        @input="changeItem"
        :id="item.id?.toString()"
      />
      <label
        class="form-check-label"
        id="todo-list-item-label"
        :for="item.id?.toString()"
      >
        {{ item.title }}
      </label>
    </div>
    <i class="bi bi-trash-fill" @click="removeItem"></i>
		</li>
  </template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Todo } from "../../services/Todo";

export default defineComponent({
  name: "TodoListItem",
  // edit this line, see TS errors
  emits: ["removeItem", "onChanged"],
  props: {
    item: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  methods: {
    // couldn't use v-model because value was "on" somehow?
    changeItem() {
      this.item.completed = !this.item.completed;
      this.$emit("onChanged", this.item);
    },
    removeItem() {
      this.$emit("removeItem", this.item);
    },
  },
});
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card-body">
          <h5 class="card-title text-left">Todo List</h5>
          <template v-if="todoItems.isLoading">Loading...</template>
          <template v-if="!todoItems.isLoading && todoItems.error">{{
            todoItems.error
          }}</template>
          <template v-if="!todoItems.isLoading && !todoItems.error">
            <template v-for="(item, index) of todoItems.data?.slice(0, 5)" :key="index">
              <TodoListItem :item="item" />
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useTodoList from "./useTodoList";
import TodoListItem from "./TodoListItem.vue";

export default defineComponent({
  name: "TodoList",
  components: {
    TodoListItem
  },
  data() {
    return {
      todoItems: useTodoList(),
    };
  },
});
</script>

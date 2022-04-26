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
            <template v-for="(item, index) of todoItems.data" :key="index">
              <pre>
							{{ JSON.stringify(item, undefined, 2) }}
						</pre
              >
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

export default defineComponent({
  name: "TodoList",
  data() {
    return {
      todoItems: useTodoList(),
    };
  },
});
</script>

<template>
  <section class="vh-100" style="background-color: #3da2c3">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-lg-8 col-xl-6">
          <div class="card rounded-3">
            <div class="card-body p-4">
              <p class="mb-2"><span class="h2 me-2">Todo List</span></p>

              <template v-if="todoItems.isLoading">
                <h5 id="todo-list-loading">Loading...</h5>
              </template>
              <template v-if="!todoItems.isLoading && todoItems.error">
                <h5 id="todo-list-error" color="red">
                  {{ todoItems.error }}
                </h5></template
              >
              <template v-if="!todoItems.isLoading && !todoItems.error">
                <ul class="list-group rounded-0">
                  <template
                    v-for="(item, index) of todoItems.data"
                    :key="index"
                  >
                    <TodoListItem :item="item" @removeItem="removeItem" />
                  </template>
                  <li class="list-group-item border-0 d-flex align-items-center ps-0">
                    <input type="text" v-model="newItemText" @keydown.enter="addItem(newItemText)" />
                  </li>
                </ul>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import useTodoList from "./useTodoList";
import TodoListItem from "./TodoListItem.vue";
import { Todo } from "../../services/Todo";

export default defineComponent({
  name: "TodoList",
  components: {
    TodoListItem,
  },
  data() {
    return {
      todoItems: useTodoList(),
      newItemText: ""
    };
  },
  methods: {
    addItem(title: string) {
      // type safety?
      const id = this.todoItems.data?.length ?? 0 + 1;
      this.todoItems.data?.push({
        id,
        userId: id,
        title,
        completed: false
      });

      this.newItemText = "";
    },
    removeItem(item: Todo) {
      // type safety?
      this.todoItems.data!.splice(this.todoItems.data!.indexOf(item), 1);
    },
  },
});
</script>

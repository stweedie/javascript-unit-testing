import { createRouter, createWebHistory } from "vue-router";
const routes = [
	{
		path: "/todo-list",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "todo-list" */ "../views/todo-list/TodoList.vue")
	}
];

const router = createRouter({
	history: createWebHistory(""),
	routes
});

export default router

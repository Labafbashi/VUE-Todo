/* eslint-disable */
<template>
  <div class="app">
    <!-- <amplify-authenticator> -->
    <h1>Todo App</h1>
    <input type="text" v-model="name" placeholder="Todo name" />
    <input type="text" v-model="description" placeholder="Todo description" />
    <button v-on:click="createTodo">Create Todo</button>
    <ul v-if="todos.length > 0">
      <li v-for="item in todos" :key="item.id">
        {{ item.name }}
        <p>{{ item.description }}</p>
      </li>
    </ul>
    <div v-else>No todos found.</div>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { createTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
export default {
  name: "App",
  async created() {
    this.getTodos();
  },
  data() {
    return {
      name: "",
      description: "",
      todos: [],
    };
  },
  methods: {
    async createTodo() {
      const { name, description } = this;
      if (!name || !description) return;
      const todo = { name, description };
      this.todos = [...this.todos, todo];
      await API.graphql({
        query: createTodo,
        variables: { input: todo },
      });
      this.name = "";
      this.description = "";
    },
    async getTodos() {
      try {
        const todos = await API.graphql({
          query: listTodos,
        });
        if (todos.length === 0) {
          // Handle case when todos array is empty
          console.log("No todos found.");
        } else {
          // Update todos array with fetched data
          this.todos = todos;
          //this.todos = todos.data.listTodos.items;
        }
      } catch (error) {
        console.log("An error occurred while fetching todos: ", error);
      }
    },
  },
};
</script>

<style>
.app {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}
ul {
  list-style: circle;
  padding: 0;
}
li {
  margin-bottom: 5px;
}
</style>

<template>
  <div id="todo-list-example">
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input
        type="text"
        v-model="newTodoText"
        id="new-todo"
        placeholder="Add new task"
      />
      <button>Add</button>
    </form>
    <ul>
      <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Code vue',
        },
        {
          id: 2,
          title: 'Learn spanish',
        },
        {
          id: 3,
          title: 'Frontend masters',
        },
      ],
      nextTodoId: 4,
    };
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = '';
    },
  },
};
</script>

<template>
  <form @submit.prevent="addNewTask" class="rightForm">
    <input
      type="text"
      id="addNewTask"
      placeholder="Add new Task"
      v-model="taskName"
      required
    />
    <input type="button" value="Add" id="addNewButton" @click="addNewTask" />
    <div class="timers">
      <img
        @onclick="addPomodoroTime"
        src="../assets/timer-black-18dp.svg"
        alt="timer"
      />
      <img src="../assets/timer-black-18dp.svg" alt="timer" />
      <img src="../assets/timer-black-18dp.svg" alt="timer" />
      <img src="../assets/timer-black-18dp.svg" alt="timer" />
      <img src="../assets/timer-black-18dp.svg" alt="timer" />
    </div>
    <h4>Tasks</h4>
    <ul>
      <li v-for="(todo, index) in todos" :key="index" class="todoItem">
        <input type="checkbox" v-model="todo.done" />
        {{ todo.title }}
        <input
          type="button"
          value="Remove"
          id="removeButton"
          @click="removeTask(index)"
        />
      </li>
    </ul>
  </form>
</template>

<style scoped>
  #addNewTask {
    color: var(--color-white);
    background-color: var(--color-glass);
    border-radius: var(--radius);
    border: none;
    width: 100%;
    height: 36px;
    margin-top: 24px;
    font-family: 'Mukta', sans-serif;
    font-size: 1rem;
    padding: 16px;
  }

  #addNewButton {
    margin-left: -64px;
    border: none;
    height: 24px;

    border-radius: 4px;
    background-color: var(--color-glass);
    color: var(--color-white);
  }
  #addNewButton:hover {
    background-color: rgba(255, 255, 255, 0.705);
    color: var(--color-black);
    cursor: pointer;
  }

  #removeButton {
    border: none;
    height: 24px;
    border-radius: 4px;
    background-color: var(--color-glass);
    color: var(--color-white);
  }

  #removeButton:hover {
    background-color: rgba(255, 255, 255, 0.705);
    color: var(--color-black);
    cursor: pointer;
  }

  .todoItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .timers {
    margin-left: 80%;
    margin-top: -26px;
    max-height: 20px;
    width: 100px;
  }
  .timers img {
    cursor: pointer;
  }

  ul {
    padding-left: 0px;
    max-height: 100%;
  }
  li {
    list-style: none;
    color: var(--color-white);
    background-color: var(--color-glass);
    border-radius: var(--radius);
    margin-top: 16px;
    padding: 16px;
  }

  ul {
    max-height: 420px;
    overflow: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  ul::-webkit-scrollbar {
    display: none;
  }
</style>

<script>
  export default {
    name: 'AddTodo',
    props: ['title'],
    data() {
      return {
        todos: [],
        taskName: '',
        done: false,
        timer: ''
      }
    },
    methods: {
      addNewTask() {
        if (this.taskName.length > 0) {
          this.todos.push({
            title: this.taskName,
            done: false
          })
        }
        this.taskName = ''
      },
      removeTask(index) {
        this.todos.splice(index, 1)
      },
      addPomodoroTime() {
        this.timer = 0.25
      }
    }
  }
</script>

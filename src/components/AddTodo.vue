<template>
  <form @submit.prevent="addNewTask" class="rightForm">
    <div class="todoField">
      <input
        type="text"
        id="addNewTask"
        placeholder="Add new Task"
        v-model="taskName"
        required
      />
      <button class="hide">add</button>
      <div class="timers">
        <img
          @click="removePomodoroTime()"
          src="../assets/arrow.svg"
          alt="timer"
          class="downArrow"
        />
        <input
          type="number"
          min="1"
          max="12"
          required
          placeholder="1"
          class="timeNumber"
          v-model="timer"
        />
        <img
          @click="addPomodoroTime()"
          src="../assets/arrow.svg"
          alt="timer"
          class="upArrow"
        />
      </div>
    </div>
    <h4>Todos</h4>
    <ul>
      <li
        v-for="(todo, index) in $store.state.todos"
        :key="index"
        class="todoItem"
      >
        <input type="checkbox" v-model="todo.done" />
        <svg
          width="32"
          height="32"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
          @click="pushPage"
        >
          <path
            d="M60 7.5C31.0078 7.5 7.5 31.0078 7.5 60C7.5 88.9922 31.0078 112.5 60 112.5C88.9922 112.5 112.5 88.9922 112.5 60C112.5 31.0078 88.9922 7.5 60 7.5ZM76.8867 60.8086L51.293 79.4297C51.1527 79.5305 50.9873 79.5907 50.815 79.6037C50.6427 79.6166 50.4701 79.5818 50.3163 79.5031C50.1625 79.4244 50.0334 79.3048 49.9431 79.1574C49.8529 79.0101 49.805 78.8407 49.8047 78.668V41.4492C49.8041 41.2761 49.8515 41.1062 49.9416 40.9583C50.0317 40.8105 50.1609 40.6905 50.3151 40.6116C50.4692 40.5327 50.6421 40.4981 50.8147 40.5115C50.9873 40.5249 51.1529 40.5858 51.293 40.6875L76.8867 59.2969C77.0076 59.3824 77.1063 59.4957 77.1743 59.6272C77.2424 59.7587 77.2779 59.9046 77.2779 60.0527C77.2779 60.2008 77.2424 60.3468 77.1743 60.4783C77.1063 60.6098 77.0076 60.7231 76.8867 60.8086V60.8086Z"
          />
        </svg>

        <span class="timerTodo">
          {{ todo.timer }}
        </span>
        <strong>
          {{ todo.title }}
        </strong>
        <span class="dateAddedTodo">
          {{ todo.dateAdded }}
        </span>
        <button @click="removeTask(index)" class="removeButton">
          <svg
            width="16"
            height="16"
            viewBox="0 0 14 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 5.5C4.63261 5.5 4.75979 5.55268 4.85355 5.64645C4.94732 5.74021 5 5.86739 5 6V12C5 12.1326 4.94732 12.2598 4.85355 12.3536C4.75979 12.4473 4.63261 12.5 4.5 12.5C4.36739 12.5 4.24021 12.4473 4.14645 12.3536C4.05268 12.2598 4 12.1326 4 12V6C4 5.86739 4.05268 5.74021 4.14645 5.64645C4.24021 5.55268 4.36739 5.5 4.5 5.5V5.5ZM7 5.5C7.13261 5.5 7.25979 5.55268 7.35355 5.64645C7.44732 5.74021 7.5 5.86739 7.5 6V12C7.5 12.1326 7.44732 12.2598 7.35355 12.3536C7.25979 12.4473 7.13261 12.5 7 12.5C6.86739 12.5 6.74021 12.4473 6.64645 12.3536C6.55268 12.2598 6.5 12.1326 6.5 12V6C6.5 5.86739 6.55268 5.74021 6.64645 5.64645C6.74021 5.55268 6.86739 5.5 7 5.5V5.5ZM10 6C10 5.86739 9.94732 5.74021 9.85355 5.64645C9.75979 5.55268 9.63261 5.5 9.5 5.5C9.36739 5.5 9.24021 5.55268 9.14645 5.64645C9.05268 5.74021 9 5.86739 9 6V12C9 12.1326 9.05268 12.2598 9.14645 12.3536C9.24021 12.4473 9.36739 12.5 9.5 12.5C9.63261 12.5 9.75979 12.4473 9.85355 12.3536C9.94732 12.2598 10 12.1326 10 12V6Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.5 3C13.5 3.26522 13.3946 3.51957 13.2071 3.70711C13.0196 3.89464 12.7652 4 12.5 4H12V13C12 13.5304 11.7893 14.0391 11.4142 14.4142C11.0391 14.7893 10.5304 15 10 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4H1.5C1.23478 4 0.98043 3.89464 0.792893 3.70711C0.605357 3.51957 0.5 3.26522 0.5 3V2C0.5 1.73478 0.605357 1.48043 0.792893 1.29289C0.98043 1.10536 1.23478 1 1.5 1H5C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0L8 0C8.26522 0 8.51957 0.105357 8.70711 0.292893C8.89464 0.48043 9 0.734784 9 1H12.5C12.7652 1 13.0196 1.10536 13.2071 1.29289C13.3946 1.48043 13.5 1.73478 13.5 2V3ZM3.118 4L3 4.059V13C3 13.2652 3.10536 13.5196 3.29289 13.7071C3.48043 13.8946 3.73478 14 4 14H10C10.2652 14 10.5196 13.8946 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13V4.059L10.882 4H3.118ZM1.5 3V2H12.5V3H1.5Z"
              fill="white"
            />
          </svg>
        </button>
      </li>
    </ul>
  </form>
</template>

<style lang="scss" scoped>
  .todoField {
    position: relative;
    background-color: var(--color-glass);
    border-radius: var(--radius);
    border: var(--border);
  }
  #addNewTask {
    color: var(--color-white);
    background-color: rgba(0, 0, 139, 0);
    border: none;
    display: inline-block;
    position: relative;
    height: 36px;
    width: 80%;
    font-family: 'Mukta', sans-serif;
    font-size: 1rem;
    padding: 16px;
  }
  input:focus {
    outline: none;
  }
  .hide {
    display: none;
  }
  #addNewButton {
    /* margin-left: -64px; */
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

  .timers {
    height: 32px;
    display: flex;
    width: 100px;

    position: absolute;
    right: 8px;
    top: 0;
  }
  .timeNumber {
    width: 36px;
    background-color: rgba(245, 245, 220, 0);
    border: none;
    color: var(--color-white);
    text-align: center;
    height: 36px;
  }
  .downArrow {
    transform: rotate(180deg) scale(1.5);
  }
  .downArrow:hover {
  }
  .upArrow {
    transform: scale(1.5);
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type='number'] {
    -moz-appearance: textfield; /* Firefox */
  }
  .timers img {
    cursor: pointer;
  }

  .removeButton {
    border: none;

    height: 100%;
    border-radius: 1px;
    background-color: var(--color-glass);
    color: var(--color-white);

    transition: 0.5s all;
  }

  .removeButton:hover {
    background-color: rgba(255, 255, 255, 0.705);
    cursor: pointer;
    background-color: red;
  }

  .rightForm {
    margin-top: 32px;
  }

  ul {
    padding-left: 0px;
    max-height: 100%;
    margin-top: 0px;
    max-height: 779px;
  }
  li {
    border: var(--border);
    list-style: none;
    color: var(--color-white);
    background-color: var(--color-glass);
    border-radius: var(--radius);
    margin-top: 16px;
    padding: 16px;
    position: relative;
    display: flex;
    align-items: center;
    svg {
      height: 32px;
      // width: 32px;
      transition: 0.2s ease all;
      fill: var(--color-white);
    }
    svg:hover {
      fill: var(--color-yellow);
      cursor: pointer;
    }
    button {
      position: absolute;
      right: 0px;
      top: 0;
      height: 46px;
    }
    input[type='checkbox'] {
      height: 32px;
      width: 32px;
      margin-right: 16px;
    }
    .dateAddedTodo {
      position: absolute;
      right: 40px;
    }
    .timerTodo {
      margin-left: 16px;
      margin-right: 16px;
      font-size: 32px;
      color: var(--color-yellow);
      line-height: 1.3;
    }
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
  import moment from 'moment'
  export default {
    name: 'AddTodo',
    props: ['title'],
    data() {
      return {
        todos: [],
        taskName: '',
        done: false,
        timer: 1,
        dateAdded: '',
        finnishedTodos: []
      }
    },
    methods: {
      addNewTask() {
        if (this.taskName.length > 0) {
          // this.todos.push({
          //   title: this.taskName,
          //   done: false,
          //   timer: this.timer,
          //   dateAdded: moment().format('D MMM')
          // })

          this.$store.commit(
            'addTodos',
            Object.assign(
              {},
              {
                title: this.taskName,
                done: false,
                timer: this.timer,
                dateAdded: moment().format('D MMM')
              }
            )
          )
          this.timer = 1
        }
        this.taskName = ''
      },
      removeTask(index) {
        // this.todos.splice(index, 1)
        this.$store.commit('removeTask', index)
      },
      addPomodoroTime() {
        if (this.timer < 12) {
          this.timer++
        }
      },
      removePomodoroTime() {
        if (this.timer > 1) {
          this.timer--
        }
      },

      finnished() {
        // SEND TO STORE
        this.$store.commit(
          'addFinnishedTodo',
          Object.assign({}, this.finnishedTodos)
        )
        // RESET DATA
        this.finnishedTodos = []
      },
      pushPage() {
        this.$router.push({ name: 'Timer' })
      }
    },
    computed: {
      countPomodoros() {
        let totalTime = 0
        this.todos.forEach(element => {
          totalTime += element.timer
          return totalTime
        })
        return totalTime
      }
    }
  }
</script>

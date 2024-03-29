import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    finnishedTodos: [],
    settings: {
      pomodoroLength: 25,
      shortBreak: 5,
      longBreak: 15,
      longBreakAfter: 4,
      autoStartPomodoro: true,
      autoStartBreak: false,
      disableBreak: false,
      alarmSound: true,
      alarmSoundType: 'Bell',
      breakAlarm: true,
      breakAlarmType: 'Beeps'
    },
    accountInformation: {
      name: 'Thomas',
      lastname: 'Laukkanen',
      age: 29,
      MemberSince: '2021-01-23',
      id: 1,
      email: 'tlaukkanen@protonmail.com',
      password: 'admin'
    },
    todos: [
      {
        dateAdded: '12 Apr',
        done: false,
        timer: 10,
        title: 'Finnish the code for todo app'
      }
    ],
    timer: {
      label: 'Add timer',
      min: 25,
      sec: 0,
      running: false,
      paused: false,
      stopped: true,
      interval: null
    }
  },
  actions: {},
  mutations: {
    addFinnishedTodo(state, todos) {
      state.finnishedTodos.push(todos)
    },
    addTodos(state, todo) {
      state.todos.push(todo)
    },
    removeTask(state, index) {
      state.todos.splice(index, 1)
    },
    runTimer(state, start) {
      state.timer.running = start
    },
    countDown(state) {
      if (state.timer.sec == 0) {
        state.timer.min--
        state.timer.sec = 59
      } else {
        state.timer.sec--
      }
      if (state.timer.sec == 0 && state.timer.min == 0) {
        state.todos[0].timer--
      }
    },
    setInterval(state, timer) {
      if (timer == 'clear') {
        clearInterval(state.timer.interval)
      }
      state.timer.interval = timer
    }
  }
})

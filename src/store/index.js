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
    todos: []
  },
  actions: {},
  mutations: {
    addFinnishedTodo(state, todos) {
      this.finnishedTodos.push(todos)
    },
    addTodos(state, todo) {
      this.todos.push(todo)
    }
  }
})

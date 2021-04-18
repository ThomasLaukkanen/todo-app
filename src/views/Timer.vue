<template>
  <div class="container">
    <div class="pomodoro">
      <div class="pomodoroLabel">
        <h3>{{ currentTask }}</h3>
      </div>
      <div class="pomodoroCounts">
        <h3>{{ currentPomodoroCount }}</h3>
      </div>
      <div class="pomodoroCounter">
        <h2>{{ currentTime }}</h2>
      </div>
    </div>
    <div class="Buttons">
      <button @click="run">
        <b>{{ buttonMsg }}</b>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        label: 'Add timer',
        min: 23,
        sec: 60,
        running: false,
        paused: false,
        stopped: true,
        timer: null,
        buttonMsg: 'Start'
      }
    },
    methods: {
      run: function() {
        if (this.$store.state.timer.running !== true) {
          this.buttonMsg = 'Stop'
          this.$store.commit(
            'setInterval',
            setInterval(() => this.countdown(), 1000)
          )
          this.$store.commit('runTimer', true)
        } else {
          this.buttonMsg = 'Start'

          this.$store.commit('setInterval', 'clear')
          this.$store.commit('runTimer', false)
        }
      },
      pause: function() {
        clearInterval()
        this.$store.commit('runTimer', false)
      },
      stop: function() {},
      countdown: function() {
        this.$store.commit('countDown', 1)
      }
    },
    computed: {
      currentTask: function() {
        return this.$store.state.todos[0].title
      },
      currentTime: function() {
        let minutes = this.$store.state.timer.min
        let seconds = this.$store.state.timer.sec
        if (
          this.$store.state.timer.sec == 0 &&
          this.$store.state.timer.min == 0
        ) {
          return this.$store.commit('setInterval', 'clear')
        } else if (this.$store.state.timer.sec < 10) {
          let formatsec = '0' + seconds

          return `${minutes}:${formatsec}`
        } else {
          return `${minutes}:${seconds}`
        }
      },
      currentPomodoroCount: function() {
        return this.$store.state.todos[0].timer
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .pomodoro {
    border: var(--border);
    background-color: var(--color-glass);
    color: var(--color-white);
    padding: 16px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  button {
    margin-top: 16px;
    border: var(--border);
    background-color: var(--color-glass);
    color: var(--color-white);
    padding: 16px;
    border-radius: 4px;
  }
  h3 {
    margin: 32px;
  }
  .pomodoroCounter {
    text-align: center;
  }
</style>

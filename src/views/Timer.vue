<template>
  <div class="container">
    <div class="pomodoro">
      <div class="pomodoroLabel">{{ currentTask }}</div>
      <div class="pomodoroCounts">{{ currentPomodoroCount }}</div>
      <div class="pomodoroCounter">{{ currentTime }}</div>
    </div>
    <div class="Buttons">
      <button @click="run" v-if="!$store.state.timer.running">Start</button>
      <button @click="pause" v-if="$store.state.timer.running">Pause</button>
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
        stopped: true
      }
    },
    methods: {
      run: function() {
        setInterval(() => this.countdown(), 1000)
        this.$store.commit('runTimer', true)
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
        return `${minutes}:${seconds}`
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
</style>

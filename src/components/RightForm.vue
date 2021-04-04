<template>
  <div class="rightForm">
    <h4>Stats</h4>
    <section class="stats">
      <div>
        <h6>
          Total Time
          <br />
          {{ (countPomodoros * 30) / 60 }} hours
        </h6>

        <h6>
          Elapsed Time
          <br />
          0 min
        </h6>
        <h6>
          Tasks until
          <br />
          {{
            moment()
              .locale('sv')
              .add(countPomodoros * 30, 'minutes')
              .format(' LT')
          }}
        </h6>
      </div>
      <div>
        <h6>
          Progress
          <br />
          {{
            this.$store.state.finnishedTodos.length == 0
              ? '0 %'
              : (this.$store.state.todos.length /
                  this.$store.state.finnishedTodos.length) *
                  100 +
                '%'
          }}
        </h6>
        <h6>
          Pomodoros
          <br />
          {{ countPomodoros }}
        </h6>
        <h6>
          Completed tasks
          <br />
          0 / {{ this.$store.state.todos.length }}
        </h6>
      </div>
    </section>
    <AddTodo></AddTodo>
  </div>
</template>

<style lang="scss" scoped>
  .stats {
    background-color: var(--color-glass);
    border-radius: var(--radius);
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    padding: 8px;
    flex-wrap: wrap;
    border: var(--border);
  }
  h6 {
    margin: 16px;
  }
  h4 {
    margin-bottom: 16px;
  }
</style>

<script>
  // import AddTodo from '@/components/AddTodo.vue';

  import AddTodo from './AddTodo.vue'
  export default {
    components: { AddTodo },
    name: 'RightForm',
    computed: {
      countPomodoros() {
        let totalTime = 0
        this.$store.state.todos.forEach(element => {
          totalTime += element.timer
          return totalTime
        })
        return totalTime
      }
    }
  }
</script>

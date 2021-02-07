<template>
  <div class="rightForm">
    <h4>Things i want to accomplish today</h4>
    <section class="stats">
      <h6>
        Total
        <br />
        9 hours
      </h6>
      <h6>
        Breaks
        <br />
        23
      </h6>
      <h6>
        Elapsed Time
        <br />
        23 min
      </h6>
      <h6>
        Tasks until
        <br />
        18:00
      </h6>
      <h6>
        Effectivity
        <br />
        99%
      </h6>
      <h6>
        Pomodors
        <br />
        20
      </h6>
      <h6>
        Completed tasks
        <br />
        2
      </h6>
    </section>
    <AddTodo></AddTodo>
  </div>
</template>

<style scoped>
.stats {
  background-color: var(--color-glass);
  border-radius: var(--radius);
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  padding: 8px;
  flex-wrap: wrap;
}
</style>

<script>
// import AddTodo from '@/components/AddTodo.vue';

import AddTodo from './AddTodo.vue'
export default {
  components: { AddTodo },
  name: 'RightForm',
}
</script>

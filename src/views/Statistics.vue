<template>
  <div class="about">
    <h4>You have been grateful for</h4>
    <ul>
      <li
        :key="grateful.id"
        v-for="grateful in $route.store.state.finnishedTodos"
      >
        {{ grateful }}
      </li>
    </ul>
    <h4>Things that would be great if you did</h4>
    <h4>Body observations</h4>
    <h4>Lessons</h4>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
  }
  .about {
    display: flex;
    justify-content: center;
  }
  h4 {
    margin: 32px;
  }
</style>

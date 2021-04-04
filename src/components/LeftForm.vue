<template>
  <form class="leftForm">
    <h4>Today I'm grateful for</h4>
    <textarea name="" id="" rows="3"></textarea>
    <h4>Today would be great if I could</h4>
    <textarea name="" id="" rows="3"></textarea>
    <h4>Body observations</h4>
    <textarea name="" id="" rows="3"></textarea>
    <h4>Lessons of the day</h4>
    <textarea name="" id="" rows="3"></textarea>
  </form>
</template>

<style scoped>
  form textarea {
    width: 100%;
    resize: none;
    border-radius: var(--radius);
    border: none;
    background-color: var(--color-glass);
    color: var(--color-white);
    font-size: 1rem;
    border: var(--border);
    font-family: 'Mukta', sans-serif;
    font-size: 1rem;
    padding: 8px;
    box-shadow: 0px 0px 32px rgba(56, 163, 250, 0.795);
  }
  h4 {
    margin-bottom: 16px;
  }
</style>
<script>
  export default {
    name: 'LeftForm'
  }
</script>

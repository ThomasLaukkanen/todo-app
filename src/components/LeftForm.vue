<template>
  <form class="leftForm">
    <h4>Today im grateful for</h4>
    <textarea name="" id="" rows="3"></textarea>
    <h4>Today would be great if i could</h4>
    <textarea name="" id="" rows="3"></textarea>
    <h4>Body observation</h4>
    <textarea name="" id="" rows="3"></textarea>
    <h4>Lessons</h4>
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
  border: 1px rgba(240, 247, 221, 0.144) solid;
  font-family: 'Mukta', sans-serif;
  font-size: 1rem;
  padding: 8px;
}
</style>
<script>
export default {
  name: 'LeftForm',
};
</script>

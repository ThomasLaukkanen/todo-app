<template>
  <div class="home">
    <HelloWorld msg="Välkommen till thomas app" />
    <form action="">
      <h4>Today im grateful for</h4>
      <textarea name="" id="" rows="2"></textarea>
      <h4>Today Would be great if i could</h4>
      <textarea name="" id="" rows="2"></textarea>
      <h4>Body Observation</h4>
      <textarea name="" id="" rows="2"></textarea>
      <h4>Lessons</h4>
      <textarea name="" id="" rows="2"></textarea>
    </form>
  </div>
</template>

<style scoped>
form textarea {
  width: 100%;
  resize: none;
  border-radius: 8px;
}

form {
  grid-column-start: 2;
  grid-column-end: 6;
}
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Todo',
  components: {
    HelloWorld,
  },
};
</script>

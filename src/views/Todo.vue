<template>
  <div class="home">
    <HelloWorld msg="Välkommen till thomas app" />
    <form action="" class="grid">
      <div class="leftForm">
        <h4>Today im grateful for</h4>
        <textarea name="" id="" rows="3"></textarea>
        <h4>Today would be great if i could</h4>
        <textarea name="" id="" rows="3"></textarea>
        <h4>Body observation</h4>
        <textarea name="" id="" rows="3"></textarea>
        <h4>Lessons</h4>
        <textarea name="" id="" rows="3"></textarea>
      </div>
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
        <form action="">
          <input type="text" id="addNewTask" placeholder="Add new Task" />
          <input type="button" value="Add" id="addNewButton" />
          <div class="timers">
            <img src="../assets/timer-black-18dp.svg" alt="timer" />
            <img src="../assets/timer-black-18dp.svg" alt="timer" />
            <img src="../assets/timer-black-18dp.svg" alt="timer" />
            <img src="../assets/timer-black-18dp.svg" alt="timer" />
            <img src="../assets/timer-black-18dp.svg" alt="timer" />
          </div>
        </form>
        <h4>Tasks</h4>
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  width: 100%;
}
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

.leftForm {
  grid-column-start: 2;
  grid-column-end: 7;
}

.rightForm {
  grid-column-start: 7;
  grid-column-end: 12;
}

.stats {
  background-color: var(--color-glass);
  border-radius: var(--radius);
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  padding: 8px;
  flex-wrap: wrap;
}

#addNewTask {
  color: var(--color-white);
  background-color: var(--color-glass);
  border-radius: var(--radius);
  border: none;
  width: 100%;
  height: 36px;
  margin-top: 24px;
  font-family: 'Mukta', sans-serif;
  font-size: 1rem;
  padding: 16px;
}

#addNewButton {
  margin-left: -64px;
  border: none;
  height: 24px;
  width: 48px;
  border-radius: 4px;
  background-color: var(--color-glass);
  color: var(--color-white);
}
#addNewButton :hover {
  background-color: rgba(255, 255, 255, 0.705);
}

.timers {
  margin-left: 80%;
  margin-top: -26px;
  max-height: 20px;
  width: 100px;
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

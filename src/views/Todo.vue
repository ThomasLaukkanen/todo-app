<template>
  <div class="grid">
    <LeftForm></LeftForm>
    <RightForm></RightForm>
    <StartTimer class="startTimer" />
  </div>
</template>

<style>
  .hundra {
    width: 100%;
  }

  .leftForm {
    grid-column-start: 2;
    grid-column-end: 7;
  }

  .rightForm {
    grid-column-start: 7;
    grid-column-end: 12;
  }
  .startTimer {
    grid-column: 1/13;
  }
  @media screen and (max-width: 900px) {
    .leftForm {
      grid-column: 2/12;
    }
    .rightForm {
      grid-column: 2/12;
    }
  }
  @media screen and (max-width: 600px) {
    .leftForm {
      grid-column: 1/13;
    }
    .rightForm {
      grid-column: 1/13;
    }
  }
</style>
<script>
  // @ is an alias to /src

  import LeftForm from '@/components/LeftForm'
  import RightForm from '@/components/RightForm'
  import StartTimer from '@/components/StartTimer.vue'

  export default {
    name: 'Todo',
    components: {
      LeftForm,
      RightForm,
      StartTimer
    }
  }
</script>

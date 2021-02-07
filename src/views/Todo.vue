<template>
  <div class="grid">
    <LeftForm></LeftForm>
    <RightForm></RightForm>
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
</style>
<script>
// @ is an alias to /src

import LeftForm from '@/components/LeftForm'
import RightForm from '@/components/RightForm'

export default {
  name: 'Todo',
  components: {
    LeftForm,
    RightForm,
  },
}
</script>

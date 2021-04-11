<template>
  <div class="settings">
    <div>
      Pomodoro length
      <br />
      <input type="number" value="25" />
      <br />
      Short Break
      <br />
      <input type="number" value="5" />
      <br />
      Long Break
      <br />
      <input type="number" value="15" />
      <br />
      Long Break after
      <br />
      <input type="number" value="4" />
      <br />

      Auto start of next pomodoro
      <br />
      <select name="autoStartPomodoro" id="">
        <option value="true">On</option>
        <option value="false">Off</option>
      </select>
      <br />
      Auto start of break
      <br />
      <select name="autoStartBreak" id="">
        <option value="true">On</option>
        <option value="false">Off</option>
      </select>
      <br />
      Disable Break
      <br />
      <select name="disableBreak" id="">
        <option value="true">On</option>
        <option value="false">Off</option>
      </select>
      <br />
      Background color
      <br />
      Text color
    </div>
  </div>
</template>
<style scoped>
  h1 {
    text-align: center;
  }
  .settings {
    margin-top: 64px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--color-white);
  }
</style>

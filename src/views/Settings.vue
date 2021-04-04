<template>
  <div class="settings">
    Pomodoro length
    <input type="number" value="25" />
    <br />
    Short Break
    <input type="number" value="5" />
    <br />
    Long Break
    <input type="number" value="15" />
    <br />
    Long Break after
    <input type="number" value="4" />
    <br />
    Auto start of next pomodoro
    <select name="autoStartPomodoro" id="">
      <option value="true">On</option>
      <option value="false">Off</option>
    </select>
    <br />
    Auto start of break
    <select name="autoStartBreak" id="">
      <option value="true">On</option>
      <option value="false">Off</option>
    </select>
    <br />
    Disable Break
    <select name="disableBreak" id="">
      <option value="true">On</option>
      <option value="false">Off</option>
    </select>
  </div>
</template>
<style scoped>
  h1 {
    text-align: center;
  }
  div {
    margin-top: 64px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>

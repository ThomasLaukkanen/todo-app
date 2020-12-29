<template>
  <div id="app">
    <h1 class="logo">TODO</h1>
    <div id="nav">
      <router-link to="/">To do</router-link>
      <router-link to="/statistics">Statistics</router-link>
      <router-link to="/settings">Settings</router-link>
    </div>
    <router-view class="" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;700&display=swap');

/* CSS Variables */
:root {
  --color-blue: #006992;
  --color-black: #080708;
  --color-yellow: #ffbc42;
  --color-red: #ef3054;
  --color-white: #f2f2f2;
  --color-glass: rgba(255, 255, 255, 0.308);
  --radius: 8px;
}

* {
  box-sizing: border-box;
}

html {
  margin: 0;
}
body {
  margin: 0;
  background-color: #0093e9;
  background-image: linear-gradient(
    160deg,
    #39b4bc 0%,
    #433fe9 50%,
    #349bfa 100%
  );
  background-repeat: no-repeat;
  height: 100vh;
  overflow: hidden;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
.caption {
  font-family: 'Mukta', sans-serif;
  color: var(--color-white);
  margin-bottom: 0;
}

h1 {
  font-size: 3.815rem;
}

h2 {
  font-size: 3.052rem;
}

h3 {
  font-size: 2.441rem;
}

h4 {
  font-size: 1.953rem;
  margin-top: 16px;
}

h5 {
  font-size: 1.563rem;
}

h6 {
  font-size: 1.25rem;
  margin-top: 0;
}

p {
  font-size: 1rem;
}

.caption {
  font-size: 0.8rem;
}

#app {
  font-family: 'Mukta', sans-serif;
}

.logo {
  font-family: 'Rajdhani', sans-serif;
  margin-bottom: 0;
  text-align: center;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: var(--color-white);
  margin-left: 20px;
  text-decoration: none;
  font-size: 1.25rem;
}

#nav a.router-link-exact-active {
  color: var(--color-yellow);
  border-bottom: 2px var(--color-yellow) solid;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 24px;
}
</style>

<template>
  <div class="container">
    <button @click="pushPage">
      <strong>
        Start timer
      </strong>
    </button>
    <button>
      <strong>
        End day
      </strong>
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      pushPage() {
        this.$router.push({ name: 'Timer' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
  }

  button {
    height: 40px;
    width: 88px;
    background-color: var(--color-white);
    color: var(--color-dark);
    border: none;
    margin: 16px;
    border-radius: 4px;
    transition: 0.2s ease all;
  }
  button:hover {
    transform: scale(1.1);
    background-color: var(--color-yellow);
  }
</style>

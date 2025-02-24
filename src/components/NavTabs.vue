<template>
  <nav class="nav-tabs">
    <router-link class="nav-tabs__link" to="/">Форма</router-link>
    <router-link class="nav-tabs__link" to="/users">Данные</router-link>
  </nav>
</template>

<style lang="scss" scoped>
  .nav-tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    width: 100%;

    &__link {
      font-weight: bold;
      padding: 8px 16px;
      border-bottom: 1px solid #afb0b6;
      color: #2c3e50;
      text-decoration: none;

      &.router-link-exact-active {
        border-bottom: 3px solid #42b983;
      }
    }
  }
</style>

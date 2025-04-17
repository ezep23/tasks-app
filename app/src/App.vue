<template>

  <nav>
    <router-link to="/">
      <h1>Tasks APP</h1>
    </router-link>
    <div class="nav-links">
      <router-link to="/tasks">Tasks</router-link>
      <router-link to="/completed">Completed</router-link>
    </div>
  </nav>

  <router-view />

</template>

<style scoped>

  nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: #0486f8;
  }

  .nav-links{
    gap: 80px;
    display: flex;
  }

</style>
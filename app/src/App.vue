<script setup>
  import { ref, defineEmits } from 'vue';

  import Navbar from './components/Navbar.vue';

  let selectedView = ref('pending');

  const changeViewTasks = (view) => {
    selectedView.value = view;
  }

</script>

// recibimos la info de la opción del Navbar
// hay que mandarlo al div del tasks, hay que ver como

<template>
  <Navbar @sendViewOption="changeViewTasks" />
  <div>
    <Tasks is:="selectedView === 'pending' ? 'pendings' : 'completeds'" />
  </div>
</template>

<style scoped>
  
</style>

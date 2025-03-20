<script setup>
    import Search from './Search.vue';
    import ToDo from './ToDo.vue'

</script>

<template>
    <Search />
    <div v-show="">
        <ToDo v-for="task in tasks" />
    </div>  
</template>

<style scoped>
</style>
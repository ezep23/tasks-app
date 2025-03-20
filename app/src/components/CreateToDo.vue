<script setup>
    import { addToDo } from '../store/todos.js'
</script>
 
<template>
    <button @click="addToDo">
        +
    </button>
</template>

<style scoped>
    button{
        padding: 20px;
        font-size: 1.2rem;
        background-color: #ccc;
    }
</style>
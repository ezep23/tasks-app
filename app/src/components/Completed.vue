<script setup>
    import { useTasksStore } from '../store/tasks.js';

    const store = useTasksStore();
    let tasks = store.$state.completed;
</script>

<template>
    <h2>All completed tasks</h2>
    <div v-for="task in tasks" :key="task.id" class="task">
        <p>{{ task.id }} - {{ task.title }}</p>
        <span>{{ task.description }}</span>
        <div class="buttons">
            <button @click="store.uncompleteTask(task.id)">Send to tasks</button>
            <button @click="store.removeCompletedTask(task.id)">Delete</button>
        </div>
    </div>
</template>

<style scoped>
    h2{
        color: #131313;
        font-family: Arial;
        font-size: 2rem;
        text-align: center;
    }

    .task {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #0486f8;
        color: white;
        padding: 10px 40px;
        margin: 20px 300px;
        border-radius: 10px;
    }

    .buttons{
        display: flex;
        gap: 20px;
    }

    .buttons button {
        background-color: #fff;
        color: #0486f8;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
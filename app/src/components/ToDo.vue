<script setup>

</script>

<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo.name">{{ todo }}
                <button @click="">Listo</button>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
<script setup>

</script>

<template>
    <div class="container">
        <input type="text" placeholder="Buscar tarea">
        <button>Búscar</button>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
        justify-content: end;
        max-height: -10vh;
    }

    input{
        width: 40%;
        padding: 0.5rem;
        font-size: 1.5rem;
    }

    button{
        padding: 0.5rem 1rem;
        font-size: 1.5rem;
        background-color: #0077c7;
        color: #ffffff;
        border: none;
        cursor: pointer;
    }
</style>
<script setup>
  import Title from '../Title.vue';
</script>

<template>
    <aside>
        <Title />
        <nav>
            <ul>
                <li><a href="#">Tareas</a></li>
                <li><a href="#">Completados</a></li>
            </ul>
        </nav>
    </aside>
</template>

<style scoped>
    aside{
        width: 25%;
        min-height: 100vh;
        background-color: #0077c7;
        padding: 1rem;
    }


    ul{
        display: flex;
        flex-direction: column;
        align-items: start;
        list-style-type: none;
        padding: 20px 60px;
    }

    li{
        margin: 0.3rem;
    }

    a{  
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        font-size: 2rem;
        color: #ffffff
    }
</style>
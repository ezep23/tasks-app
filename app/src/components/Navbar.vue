<script setup>
    import { ref, defineEmits } from 'vue';
    import Title from './Title.vue';

    const emits = defineEmits(['changeViewTasks']);
  
    const handleView = (state) => {
        emits('sendViewOption', selectedView.value)
    }

    let selectedView = ref('')

</script>

<template>
    <aside>
        <Title />
        <nav>
            <ul>
                <li><a href="#" @click="handleView('pending')">Tareas</a></li>
                <li><a href="#" @click="handleView('completeds')">Completados</a></li>
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
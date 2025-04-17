import {createRouter, createWebHistory} from 'vue-router';

import HomeView from '../views/HomeView.vue';
import TasksView from '../views/TasksView.vue';
import CompletedView from '../views/CompletedView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/tasks',
        name: 'Tasks',
        component: TasksView,
    },
    {
        path: '/completed',
        name: 'Completed',
        component: CompletedView,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router; 
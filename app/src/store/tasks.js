import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
    state: () => ({
     tasks: [
        { id: 1, title: 'Task 1', description: 'About task', completed: false },
        { id: 2, title: 'Task 2', description: 'About task', completed: false },
        { id: 3, title: 'Task 3', description: 'About task', completed: false },
        { id: 4, title: 'Task 4', description: 'About task', completed: false },
        { id: 5, title: 'Task 5', description: 'About task', completed: false },
     ],
     completed: [
        { id: 6, title: 'Task 6', description: 'About task', completed: true },
        { id: 7, title: 'Task 7', description: 'About task', completed: true },
     ]
    }),
    getters: {
        times2: (state) => state.count * 2,
    },
    actions: {
        addTask(task) {
            this.tasks.push(task);
        },
        removeTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        },
        completeTask(taskId) {
            const task = this.tasks.find(task => task.id === taskId);
            if (task) {
                task.completed = true;
                this.completed.push(task);
                this.removeTask(taskId);
            }
        },
        uncompleteTask(taskId) {
            const task = this.completed.find(task => task.id === taskId);
            if (task) {
                task.completed = false;
                this.tasks.push(task);
                this.removeCompletedTask(taskId);
            }
        },
        removeCompletedTask(taskId) {
            this.completed = this.completed.filter(task => task.id !== taskId);
        },
    },

});
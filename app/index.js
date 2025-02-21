import './style.css';
import { initApp } from './src/app';
import { todos } from './src/store/todos';

todos.initStore();
initApp('#container');
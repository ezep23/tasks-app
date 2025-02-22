import html from './app.html?raw';

const ElementIDs = {
    Content: '.content',
    ToDos: '.all',
    CompletedTodos: '.completed',
}

/**
 * @param {HTMLDivElement} container
 */

export const initApp = ( container ) => {

    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(container).append(app);
    })();

    const content = document.querySelector(ElementIDs.Content); 
    const renderToDos = document.querySelector(ElementIDs.ToDos);
    const renderCompletedToDos = document.querySelector(ElementIDs.CompletedTodos);
    
    renderToDos.addEventListener('click', () => {
        content.innerHTML = "Bocaaaa";
    });

    renderCompletedToDos.addEventListener('click', () => {
        content.innerHTML = "River";
    })

} 
import html from './app.html?raw';

/**
 * @param {HTMLDivElement} indexElement
 */

export const initApp = ( indexElement ) => {

    (() => {
        document.querySelector(indexElement).innerHTML = html;
    })();
}
import renderToDOM from './render-to-dom.js';
import makeMessage from './make-message';

const waitTime = new Promise((todoOk, todoMal) => {
    setTimeout(()=>{
        todoOk('Han pasado 3 segundos, omg');
    }, 3000);
});

// No se puede mesclar import y module.exports

// module.exports = {
//     firstMessage: 'Hola mundo desde un modulo',
//     delayedMessage: async () => {
//         const message = await waitTime;
//         renderToDOM(makeMessage(message));
//     }
// }
const messages = {
    firstMessage: 'Hola mundo desde un modulo',
    delayedMessage: async () => {
        const message = await waitTime;
        renderToDOM(makeMessage(message));
    }
}

export {messages}
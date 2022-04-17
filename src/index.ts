import { createGameOfLife } from "./createGameOfLife";

// Запуск игры
//
// - создать элемент и добавить его на страницу
// - создать на этом элементе игру с помощью `createGameOfLife` с размерами поля x / y
// - для проверки своего кода можно создать еще один элемент и создать вторую игру на этой же странице

const gameWrapper1: HTMLElement = document.createElement("div");
const gameWrapper2: HTMLElement = document.createElement("div");

document.body.appendChild(gameWrapper1);
document.body.appendChild(gameWrapper2);

createGameOfLife(4, 5, gameWrapper1);
//createGameOfLife(10, 10, gameWrapper2);

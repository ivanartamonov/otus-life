import { drawField } from "./drawField";
import { getNextState } from "./getNextState";
import { isAnyoneAlive } from "./isAnyoneAlive";

export function createGameOfLife(
  sizeX: number,
  sizeY: number,
  htmlElement: HTMLElement
) {
  let gameIsRunning = false;
  let timer: NodeJS.Timeout;

  // Создать блок для поля
  // Создать кнопку управления игрой
  htmlElement.innerHTML = `<div class="field-wrapper"></div><button>Start</button>`;
  const fieldWrapper = <HTMLElement>htmlElement.querySelector(".field-wrapper");
  const button = <HTMLButtonElement>htmlElement.querySelector("button");

  // Создать поле заданного размера
  let field: number[][] = Array.from({ length: sizeY }).map(() =>
    new Array(sizeX).fill(0)
  );

  const cellClickHandler = (x: number, y: number) => {
    field[y][x] = field[y][x] === 0 ? 1 : 0;
    drawField(fieldWrapper, field, cellClickHandler);
  };

  // Отрисовать поле заданного размера
  drawField(fieldWrapper, field, cellClickHandler);

  // При клике по ячейке поля
  // - поменять его состояние
  // - перерисовать поле
  function stopGame() {
    gameIsRunning = false;
    button.innerHTML = "Start";
    // При клике на кнопке `Stop` остановить таймер
    clearInterval(timer);
  }

  function startGame() {
    // При клике по кнопке старт
    // - поменять надпись на `Stop`
    gameIsRunning = true;
    button.innerHTML = "Stop";
    // - запустить таймер для обновления поля
    timer = setInterval(() => {
      // В таймере обновления поля
      // - посчитать новое состояние поля
      // - отрисовать новое состояние поля
      // - проверить, что есть живые клетки
      // - если живых клеток нет
      //    - остановить таймер
      //    - вывести сообщение
      field = getNextState(field);
      drawField(fieldWrapper, field, cellClickHandler);
      if (!isAnyoneAlive(field)) {
        alert("Death on the block");
        stopGame();
      }
    }, 1000);
  }

  button.addEventListener("click", () => {
    if (!gameIsRunning) {
      startGame();
    } else {
      stopGame();
    }
  });
}

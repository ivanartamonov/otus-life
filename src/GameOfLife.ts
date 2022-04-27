import { drawField } from "./drawField";
import { getNextState } from "./getNextState";
import { isAnyoneAlive } from "./isAnyoneAlive";

class GameOfLife {
  // Html elements
  private rootElement: HTMLElement;
  private fieldWrapper!: HTMLDivElement;
  private button!: HTMLButtonElement;
  private inputX!: HTMLInputElement;
  private inputY!: HTMLInputElement;

  // Game properties
  private x: number;
  private y: number;
  private gameIsRunning = false;
  private timer: NodeJS.Timer | undefined;
  private field!: number[][];

  constructor(rootElement: HTMLElement, x: number, y: number) {
    this.rootElement = rootElement;
    this.x = x;
    this.y = y;
    this.createMarkup(this.x, this.y);
    this.makeField(this.x, this.y);
  }

  createMarkup(x: number, y: number) {
    this.inputX = document.createElement("input");
    this.inputX.type = "number";
    this.inputX.placeholder = "X";
    this.inputX.value = String(x);
    this.inputX.addEventListener("change", (event: Event) => {
      const target = event.currentTarget as HTMLInputElement;
      this.updateCols(Number(target.value));
    });

    this.inputY = document.createElement("input");
    this.inputY.type = "number";
    this.inputY.placeholder = "Y";
    this.inputY.value = String(y);
    this.inputY.addEventListener("change", (event: Event) => {
      const target = event.currentTarget as HTMLInputElement;
      this.updateRows(Number(target.value));
    });

    const inputRange = document.createElement("input");
    inputRange.type = "range";

    this.fieldWrapper = document.createElement("div");
    this.fieldWrapper.className = "field-wrapper";

    this.button = document.createElement("button");
    this.button.innerHTML = "Start";
    this.button.addEventListener("click", () => {
      this.gameIsRunning ? this.stop() : this.start();
    });

    this.rootElement.append(this.inputX);
    this.rootElement.append(this.inputY);
    this.rootElement.append(inputRange);
    this.rootElement.append(this.fieldWrapper);
    this.rootElement.append(this.button);
  }

  updateCols(colsCount: number) {
    if (colsCount <= 0 || colsCount > 30) {
      return;
    }

    if (colsCount > this.x) {
      while (colsCount > this.x) {
        this.x++;
        this.field.forEach((row) => {
          row.push(0);
        });
      }
    }

    if (colsCount < this.x) {
      while (colsCount < this.x) {
        this.x--;
        this.field.forEach((row) => {
          row.pop();
        });
      }
    }

    drawField(this.fieldWrapper, this.field, this.cellClickHandler);
  }

  updateRows(rowsCount: number) {
    if (rowsCount <= 0 || rowsCount > 30) {
      return;
    }

    if (rowsCount > this.y) {
      while (rowsCount > this.y) {
        this.y++;
        this.field.push(new Array(this.x).fill(0));
      }
    }

    if (rowsCount < this.y) {
      while (rowsCount < this.y) {
        this.y--;
        this.field.pop();
      }
    }

    drawField(this.fieldWrapper, this.field, this.cellClickHandler);
  }

  makeField(x: number, y: number) {
    this.field = Array.from({ length: y }).map(() => new Array(x).fill(0));

    // Отрисовать поле заданного размера
    drawField(this.fieldWrapper, this.field, this.cellClickHandler);
  }

  start() {
    this.gameIsRunning = true;
    this.button.innerHTML = "Stop";

    this.timer = setInterval(() => {
      this.field = getNextState(this.field);
      drawField(this.fieldWrapper, this.field, this.cellClickHandler);
      if (!isAnyoneAlive(this.field)) {
        alert("Death on the block");
        this.stop();
      }
    }, 1000);
  }

  stop() {
    this.gameIsRunning = false;
    this.button.innerHTML = "Start";

    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  cellClickHandler = (x: number, y: number) => {
    this.field[y][x] = this.field[y][x] === 0 ? 1 : 0;
    drawField(this.fieldWrapper, this.field, this.cellClickHandler);
  };
}

export default GameOfLife;

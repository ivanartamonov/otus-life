import { getNumOfAliveNeighbours } from "./getNumOfAliveNeighbours";
import { getCellState } from "./getCellState";
import { getNewCellState } from "./getNewCellState";

export function getNextState(field: number[][]) {
  return field.map((row, rowIndex) =>
    row.map((cell, cellIndex) => {
      const an = getNumOfAliveNeighbours(cellIndex, rowIndex, field);
      const currentState = getCellState(field, cellIndex, rowIndex);
      return getNewCellState(currentState, an);
    })
  );
}

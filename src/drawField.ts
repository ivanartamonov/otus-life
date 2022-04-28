export function drawField(
  htmlElement: HTMLElement,
  field: number[][],
  onCellClick: (x: number, y: number) => void
) {
  const rowIterator = (row: number[], rowIndex: number) => {
    return `<tr>${row
      .map((cell: number, columnIndex: number) => {
        if (cell === 1) {
          return `<td 
            data-x=${columnIndex}
            data-y=${rowIndex}
            class="cell alive" 
            style="background-color:#FA58D0; height:10px; width:10px;"></td>`;
        }
        return `<td 
            data-x=${columnIndex}
            data-y=${rowIndex}
            class="cell dead" 
            style="background-color:#FFFFFF; height:10px; width:10px;"></td>`;
      })
      .join("")}</tr>`;
  };

  const table = document.createElement("table");
  table.setAttribute("border", "1");
  table.innerHTML = field.map(rowIterator).join("");
  table.addEventListener("click", (ev) => {
    const clickedElement = <HTMLElement>ev.target;
    const x = Number(clickedElement.getAttribute("data-x"));
    const y = Number(clickedElement.getAttribute("data-y"));
    if (x >= 0 && y >= 0) {
      onCellClick(x, y);
    }
  });

  htmlElement.innerHTML = "";
  htmlElement.append(table);
}

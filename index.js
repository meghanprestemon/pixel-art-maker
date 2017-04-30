let currentBrushColor = "";

function createCanvas () {
  let table = document.querySelector('table');

  for (var i = 0; i < 50; i++) {
    let newRow = document.createElement('tr');

    for (var j = 0; j < 100; j++) {
      let newSquare = document.createElement('td');
      newRow.append(newSquare);
    }

    table.append(newRow);
  }
}

function changeCellColor (event) {
  event.target.style.backgroundColor = currentBrushColor;
}

function getBrushColor (event) {
  let currentColor = document.querySelector('.current-color-display')
  let style = window.getComputedStyle(event.target)
  currentBrushColor = style.getPropertyValue("background-color");
  currentColor.style.backgroundColor = currentBrushColor;
}

document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  createCanvas();

  let canvasCells = document.querySelectorAll('td')
  let paletteColors = document.querySelectorAll('.palette-color')

  canvasCells.forEach(function(cell) {
    cell.addEventListener("click", changeCellColor);
    cell.addEventListener("mouseover", function(e){
      if(e.buttons == 1 || e.buttons == 3){
          changeCellColor(e);
      }
    });
  })

  paletteColors.forEach(function(color) {
    color.addEventListener('click', getBrushColor);
  })

  document.querySelector('#color-picker').addEventListener('change', function(event) {
    let currentColor = document.querySelector('.current-color-display')
    currentBrushColor = event.target.value;
    currentColor.style.backgroundColor = currentBrushColor;
  })
});

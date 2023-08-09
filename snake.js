const snakeGameContainer = document.getElementById('snake-game');
const snakeSize = 20;
const totalCols = 53;
const totalRows = 7;

for (let row = 0; row < totalRows; row++) {
  for (let col = 0; col < totalCols; col++) {
    const snakeElement = document.createElement('div');
    snakeElement.style.width = `${snakeSize}px`;
    snakeElement.style.height = `${snakeSize}px`;
    snakeElement.style.display = 'inline-block';
    
    if (row % 2 === 0) {
      snakeElement.style.backgroundColor = col % 2 === 0 ? '#1f1f1f' : '#333';
    } else {
      snakeElement.style.backgroundColor = col % 2 === 0 ? '#333' : '#1f1f1f';
    }
    
    snakeGameContainer.appendChild(snakeElement);
  }
}

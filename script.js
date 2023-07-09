const container = document.querySelector("#container");


for (var i = 0; i < 16; i++) { 
    const result = document.createElement('div');
    result.textContent = `Box ${i+1}`;
    container.appendChild(result);
  }
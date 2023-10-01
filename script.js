const container = document.querySelector(".container");


for (var i = 0; i < 16; i++) { 
    const result = document.createElement('div');
    result.textContent = `Box ${i+1}`;
    container.appendChild(result);
  }

const grids = document.querySelectorAll('div.container > div') 


  grids.forEach((grid) => {
    grid.addEventListener('mouseover', ()=>{
      grid.style.backgroundColor = "black";
    });
  })

  const reset = document.querySelectorAll('button')
  reset.addEventListener('click', function(grids){
    for (grid in grids){
      console.log("hi");
      grid.style.backgroundColor = "white";
    }
  })
  
  //clearBoard(grids));

  function clearBoard(){
    const grids = document.querySelectorAll('div.container > div') 
    for (grid in grids){
      grid.style.backgroundColor = "white";
    }
  }
  

/*function randomColor() {
  var colors = ['#ff0000', '#00ff00', '#0000ff'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  return random_color;
}*/

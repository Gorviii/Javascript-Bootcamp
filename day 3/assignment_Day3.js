function getRandomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for(let i = 0; i <6 ; i++){
    color += letters[Math.floor(Math.random() * letters.length)]
  }
  console.log(color)
  return color
  
}

function changeBackgroundColor(){
  var randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

document.addEventListener('click' , changeBackgroundColor);
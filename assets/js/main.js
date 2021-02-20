const bck = document.querySelector(".container");

const randomColor = () => {
  let color = 'rgba(';
  for(let i = 0;i < 3;i++){

   color += Math.floor(Math.random() * 255) + ',';
  }
  return color;
};

const rand = () => {
  clr = randomColor();
  clr1 = randomColor();
  document.documentElement.style.setProperty('--clr', clr +'1)');
  document.documentElement.style.setProperty('--clr1', clr1 +'1)');
};

setInterval(rand, 50);
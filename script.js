const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
  load ++

  if(load > 99) {
    clearInterval(interval);
  }

  loadText.innerText = `${load}%`;
  loadText.getElementsByClassName.opacity = scale(load, [0, 100], [1, 0]);
  background.style.filter = `blur(${scale(load, [0, 100], [30, 0])}px)`;

};

function scale (number, originalBounts, newBounts) {
  const [inMin, inMax] = [...originalBounts];
  const [outMin, outMax] = [...newBounts];

  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

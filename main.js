// DOM Selectors

const winWidth = document.querySelector('#window_width');
const winHeight = document.querySelector('#window_height');

const objWidth = document.querySelector('#object_width');
const objHeight = document.querySelector('#object_height');

const resVw = document.querySelector('#result_vw');
const resVh = document.querySelector('#result_vh');

const convertWidth = () => {
  let winValue = winWidth.value;
  let objValue = objWidth.value;

  let result = convertCalc(winValue, objValue);

  result > 0 ? resVw.innerText = result : resVw.innerText = '0';
};

const convertHeight = () => {
  let winValue = winHeight.value;
  let objValue = objHeight.value;

  let result = convertCalc(winValue, objValue);

  result > 0 ? resVh.innerText = result : resVh.innerText = '0';
};

const convertCalc = (windowPx, objPx) => {
  return objPx*100 / windowPx ;
};

winWidth.addEventListener('keyup', convertWidth);

winHeight.addEventListener('keyup', convertHeight);

objWidth.addEventListener('keyup', convertWidth);

objHeight.addEventListener('keyup', convertHeight);
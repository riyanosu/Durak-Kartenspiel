//---------------- Eigene Standard Funktionen ------------------
//**************************************************************

function arraysLeeren(arrays) {
  arrays.forEach((array1) => {
    array1.splice(0,array1.length)
  });
}

//**************************************************************

function getRandom(min,max) {
  let x = Math.round(Math.random() * (max - min)) + min;
  return x;
}

//**************************************************************

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

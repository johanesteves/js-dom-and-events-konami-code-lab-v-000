const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;

  document.addEventListener('keydown', (event) => {
    const keyName = parseInt(event.which || event.detail);

    if(keyName === code[index]){
      index++;

      if (index === code.length){
        index = 0;
        alert('Hurray!');

      }
    }else{
      index = 0
    }
  });
}


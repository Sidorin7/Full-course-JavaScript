'use strict';

const p = document.querySelectorAll('p');
console.log(p);


function laodScript (src) {
  
  const script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.append(script);
}

laodScript('test.js');
laodScript('some.js')
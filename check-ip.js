const { lookup } = require('dns');

const getDNS = document.querySelector('.enter_dns');
const showIP = document.querySelector('.show_ip');
const btn = document.querySelector('.btn');
const { value } = getDNS;

const check = () => {
  lookup(value, ((err, result) => {
    if (err === null) {
      showIP.innerText = result;
    } else {
      showIP.innerText = err.message;
    }
  }));
};

btn.addEventListener('click', check());

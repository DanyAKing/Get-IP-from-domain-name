const lookup = require('dns').promises;

const getDNS = document.querySelector('.enter_dns');
const showIP = document.querySelector('.show_ip');
const btn = document.querySelector('.btn');
const { value } = getDNS;

const check = async () => {
  try {
    const data = await lookup(value);
    showIP.innerText = data;
  } catch (err) {
    showIP.innerText = err.message;
  }
};

btn.addEventListener('click', () => {
  check();
});

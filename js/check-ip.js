import check from './function.js';

const getDNS = document.querySelector('.enter_dns');
const { value } = getDNS;
const showIP = document.querySelector('.show_ip');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  check(value, showIP);
});

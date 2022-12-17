// const getDomain = document.querySelector('.enter_dns');
// const { value } = getDomain;
// const showIP = document.querySelector('.show_ip');
// const btn = document.querySelector('.btn');

import dnsToIP from "./module.js";

const URL = 'www.wp.pl';
const resultLooup = dnsToIP(URL);
console.log(resultLooup);

// const URL = value;

// btn.addEventListener('click', () => {
//   showIP.innerText = dnsToIP(URL);
// });
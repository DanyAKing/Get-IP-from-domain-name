// import check from './function.js';
const { lookup } = require('dns').promises;

const getDNS = document.querySelector('.enter_dns');
const showIP = document.querySelector('.show_ip');
const btn = document.querySelector('.btn');

async function check() {
  const { value } = getDNS;
  try {
    const address = await lookup(value);
    console.log(address);
  } catch (err) {
    console.log(err.code, err.message);
  }
}

// lookup(value, (error, address) => {
//   if (error === null) {
//     showIP.innerText = address;
//   } else {
//     showIP.innerText = `Ups, ${error}`;
//   }
// });
// }

btn.addEventListener('click', check());

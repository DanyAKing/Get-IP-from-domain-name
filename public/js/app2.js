const btn = document.querySelector('.submit_btn');
const input = document.querySelector('.input');
const result = document.querySelector('.result');

btn.addEventListener('click', async event => {
  event.preventDefault();
  await fetch('http://127.0.0.1:3000/send', {
    method: 'POST',
    body: JSON.stringify({ data: input.value }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => {
      const { url, address, family } = data.returnData;
      result.innerText = `Domain ${url} - address IP: ${address}, family: IP${family}`;
    });
});

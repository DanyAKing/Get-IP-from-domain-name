const btn = document.querySelector('.submit_btn');
const input = document.querySelector('.input');
const result = document.querySelector('.result');

const getDataFromBackend = async () => {
  const getData = await fetch('http://127.0.0.1:3000/get');
  const data = await getData.json();
  console.log(data);

  const [{
    url,
    address,
    family,
    error,
  }] = data;

  if (error) result.innerText = `${error}`;
  result.innerText = `Domain: ${url} has address IP ${address},family IP${family}`;
};

btn.addEventListener('click', async event => {
  event.preventDefault();
  await fetch('http://127.0.0.1:3000/send', {
    method: 'POST',
    body: JSON.stringify({ data: input.value }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  getDataFromBackend();
});

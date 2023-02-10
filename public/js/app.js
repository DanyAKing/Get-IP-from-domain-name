const btn = document.querySelector('.btn');
const dns = document.querySelector('.enter');
const resultList = document.querySelector('.result_list');
const list = document.createElement('p');

class Storage {
  constructor() {
    this.list = [];
    this.dataForList = [];
  }

  updateArray(element) {
    this.list.push(element);
  }

  filterList(element) {
    if (this.list.includes(element)) {
      return false;
    }
    return true;
  }

  sendItemToBackend() {
    fetch('http://127.0.0.1:3000/history', {
      method: 'POST',
      body: JSON.stringify(this.list),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

async function getListFromBackend(target) {
  const response = await fetch('http://127.0.0.1:3000/history');
  const data = await response.json();
  data.forEach(el => {
    target.push(el);
  });

  list.innerText = target;
  resultList.appendChild(list);
}

async function getDataForListFromBackend(target) {
  const response = await fetch('http://127.0.0.1:3000/data');
  const data = await response.json();
  data.forEach(el => {
    target.push(el);
  });
}

btn.addEventListener('click', async () => {
  await fetch('http://127.0.0.1:3000/send', {
    method: 'POST',
    body: JSON.stringify({ data: dns.value }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => {
      resultList.innerText = data;
    });
});

const btn = document.querySelector('.btn');
const data = document.querySelector('.enter_dns');
const resultList = document.querySelector('.result_list');
const list = document.createElement('p');
// const ul = document.querySelector('.list');
// const li = document.createElement('li');

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

const storage = new Storage();
getListFromBackend(storage.list);
getDataForListFromBackend(storage.dataForList);

btn.addEventListener('click', () => {
  if (data.value !== '' && storage.filterList(data.value)) {
    storage.updateArray(data.value);
  }

  list.innerText = storage.list;
  resultList.appendChild(list);

  storage.sendItemToBackend();
});

// const clrearBtn = document.createElement('button');
// clrearBtn.classList = 'cls_btn';
// clrearBtn.setAttribute('type', 'button');
// clrearBtn.innerText = 'Clear history';
// resultList.appendChild(clrearBtn);
// const clsBtn = document.querySelector('.cls_btn');

// clsBtn.addEventListener('click', () => {
//     localStorage.clear();
//     resultList.removeChild(clrearBtn);
//     resultList.removeChild(listItem);
//   });

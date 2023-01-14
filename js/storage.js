// const { createHistoryList } = require('./elements-creator');

const btn = document.querySelector('.btn');
const data = document.querySelector('.enter_dns');
const resultList = document.querySelector('.result_list');

class Storage {
  constructor(item) {
    this.history = item;
  }

  updateArray(element) {
    this.history.push(element);
  }

  sendItemToBackend() {
    fetch('http://127.0.0.1:3000/history', {
      method: 'POST',
      body: JSON.stringify(this.history),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

let history = JSON.parse(localStorage.getItem('history'));
if (history === null) {
  history = [];
} else {
  history;
}
const storage = new Storage(history);

const listItem = document.createElement('p');
listItem.innerText = history;
resultList.appendChild(listItem);

btn.addEventListener('click', () => {
  if (data.value !== '') {
    storage.updateArray(data.value);
  }
  localStorage.setItem('history', JSON.stringify(storage.history));

  listItem.innerText = storage.history;
  resultList.appendChild(listItem);

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

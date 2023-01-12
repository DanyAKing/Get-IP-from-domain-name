// const { createHistoryList, createClsHistoryBtn } = require('./elements-creator');

const btn = document.querySelector('.btn');
const data = document.querySelector('.enter_dns');
const resultList = document.querySelector('.result_list');

const storage = {
  history: [],
};

const updateArray = element => {
  storage.history.push(element);
};

const sendItemToBackend = item => {
  fetch('http://127.0.0.1:3000/history', {
    method: 'POST',
    body: item,
  });
};

const history = JSON.parse(localStorage.getItem('history'));
const listItem = document.createElement('p');
listItem.innerText = history;
resultList.appendChild(listItem);

// const clrearBtn = document.createElement('button');
// clrearBtn.classList = 'cls_btn';
// clrearBtn.setAttribute('type', 'button');
// clrearBtn.innerText = 'Clear history';
// resultList.appendChild(clrearBtn);
// const clsBtn = document.querySelector('.cls_btn');

btn.addEventListener('click', () => {
  if (data.value !== '') {
    if (history !== null) {
      updateArray(history);
    }
    updateArray(data.value);
    localStorage.setItem('history', JSON.stringify(storage.history));
  }
  listItem.innerText = JSON.parse(localStorage.getItem('history'));
  resultList.appendChild(listItem);

  sendItemToBackend();
});

// clsBtn.addEventListener('click', () => {
//   localStorage.clear();
//   resultList.removeChild(clrearBtn);
//   resultList.removeChild(listItem);
// });

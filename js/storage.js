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

function getItemsFromBackend() {
  fetch('http://127.0.0.1:3000/history')
    .then(response => response.json())
    .then(history => history.forEach(el => {
      history.push(el);
    }));
}

// let history = JSON.parse(localStorage.getItem('history'));
// if (history === null) {
//   history = [];
// } else {
//   history;
// }

// getItemsFromBackend()
//   .then({ history } => {
//     history.forEach(element => {
//       historyFromBackend.push(element);
//     });
//   });

const history = [];
getItemsFromBackend();
const storage = new Storage(history);

const listItem = document.createElement('p');
listItem.innerText = storage.history;
resultList.appendChild(listItem);

btn.addEventListener('click', () => {
  if (data.value !== '' /*&& data.value !== storage.history[storage.history.length - 1]*/) {
    storage.updateArray(data.value);
  }
  // localStorage.setItem('history', JSON.stringify(storage.history));

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

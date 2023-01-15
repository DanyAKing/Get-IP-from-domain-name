const btn = document.querySelector('.btn');
const data = document.querySelector('.enter_dns');
const resultList = document.querySelector('.result_list');

class Storage {
  constructor() {
    this.list = [];
  }

  updateArray(element) {
    this.list.push(element);
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

  getItemsFromBackend() {
    fetch('http://127.0.0.1:3000/history')
      .then(response => response.json())
      .then(list => list.forEach(el => {
        this.list.push(el);
      }));
  }
}

const storage = new Storage();
storage.getItemsFromBackend();

const listItem = document.createElement('p');
setTimeout(() => {
  listItem.innerText = storage.list;
  resultList.appendChild(listItem);
}, 200);

btn.addEventListener('click', () => {
  if (data.value !== '' /*&& data.value !== storage.history[storage.history.length - 1]*/) {
    storage.updateArray(data.value);
  }

  listItem.innerText = storage.list;
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

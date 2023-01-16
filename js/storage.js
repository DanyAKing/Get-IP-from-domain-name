const btn = document.querySelector('.btn');
const data = document.querySelector('.enter_dns');
const resultList = document.querySelector('.result_list');
const listItem = document.createElement('p');

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
}

async function getItemsFromBackend(target) {
  const response = await fetch('http://127.0.0.1:3000/history');
  const data = await response.json();
  data.forEach(el => {
    target.push(el);
  });
  listItem.innerText = target;
  resultList.appendChild(listItem);
}

const storage = new Storage();
getItemsFromBackend(storage.list);

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

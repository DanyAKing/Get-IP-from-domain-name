const btn = document.querySelector('.btn');
const data = document.querySelector('.enter_dns');
const resultList = document.querySelector('.result_list');

const storage = {
  history: [],
};

btn.addEventListener('click', () => {
  const historyElement = storage.history.push(data.value);
  if (data.value !== '') {
    historyElement;
    localStorage.setItem('history', JSON.stringify(storage.history));
  }

  // for (const item in storage.history) {
  //   const listItem = document.createElement('p');
  //   listItem.innerText = JSON.parse(localStorage.getItem('history'));
  //   resultList.appendChild(listItem);
  // }
});

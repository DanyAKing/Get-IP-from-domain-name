function createHistoryList(element, target) {
  const listItem = document.createElement('p');
  listItem.innerText = element;
  target.appendChild(listItem);
}

function createClsHistoryBtn(target) {
  const clsBtn = document.createElement('button');
  clsBtn.classList = 'cls_btn';
  clsBtn.setAttribute('type', 'button');
  clsBtn.innerText = 'Clear history';
  target.appendChild(clsBtn);
}

module.exports = { createHistoryList, createClsHistoryBtn };

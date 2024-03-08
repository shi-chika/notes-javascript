function add() {

  let getInputMemo = document.getElementById('input_memo').value;
  if (getInputMemo === "") {
    alert('尚未輸入代辦事項!!')

  } else {
    let listData = document.getElementById('list');

    let addSpan = document.createElement('span');
    let addSpan2 = document.createElement('span');
    let addLi = document.createElement('li');

    addSpan.textContent = getInputMemo;
    addSpan2.textContent = '◆';

    listData.append(addLi);
    addLi.append(addSpan2);
    addLi.append(addSpan);

    document.getElementById('input_memo').value = "";

  }

}

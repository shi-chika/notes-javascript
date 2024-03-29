
function add() {

  let inputMemo = document.querySelector('#input_memo');
  let getInputMemo = inputMemo.value;
  if (getInputMemo === "") {
    alert('尚未輸入代辦事項!!')

  } else {
    let listData = document.querySelector('#list');
    let addLi = document.createElement('li');

    let iconC = document.createElement('i')

    let printText = document.createElement('span');

    let showFinish = document.createElement('span');
    let iconDel = document.createElement('i');


    //選單 依選項做樣式變化
    let typeSelect = document.querySelector('#typeSelect');
    let textSelected = typeSelect.options[typeSelect.selectedIndex].value;

    if (textSelected === 'important') {
      addLi.className = 'important'
    } else if (textSelected === 'urgent') {
      addLi.className = 'urgent';
    }
    //將輸入的待辦事項 放到 span裡
    printText.textContent = getInputMemo;
    printText.className = 'printText';

    //完成標籤
    showFinish.textContent = '[未完成]'
    showFinish.className = 'finish'
    
    iconC.className = 'fa-regular fa-square'
    iconC.addEventListener('click', downToggle);

    iconDel.className = 'fa-solid fa-trash-can delIcon';
    iconDel.onclick = delContent;

    listData.append(addLi);
    addLi.append(iconC, printText, showFinish, iconDel);

    inputMemo.value = "";

  }

}

function downToggle(e) {
  let iconC = e.target;
  let showFinish = e.target.closest('li').querySelector('.finish');
  
  if (iconC.className.includes('fa-square')) {
    showFinish.textContent = '[完成]';
    iconC.className = 'fa-solid fa-check'
  } else {
    showFinish.textContent = '[未完成]';
    iconC.className = 'fa-regular fa-square'
  }
}



function delContent(e) {
  e.target.closest('li').remove();
}

/* 匯出文字 */
let outputBtn = document.querySelector('#outputBtn');
outputBtn.onclick = exportList;

function exportList() {
  let listLi = document.querySelectorAll('#list li');
  let num = 1;
  let str = "";

  for (let li of listLi) {
  let printText = li.querySelector('span').textContent;

    if (li.className === 'urgent') {
      str = str + num.toString() + ". ** " + printText + " **" + "\n";
    } else if (li.className === 'important') {
      str = str + num.toString() + ". * " + printText + "*" + "\n";
    } else {
      str = str + num.toString() + "." + printText + "\n";
    }
    num++
  }
  if (listLi.length === 0) {
    alert('未輸入待辦事項')
  } else {
    alert('今日代辦 :\n' + str)
  }
}

function selectChange() {
  let inputMemo = document.querySelector('#input_memo');
  let selectedItem = event.target.options[event.target.selectedIndex].value;

  if (selectedItem === 'important') {
    inputMemo.className = 'item selectChangeY';
  } else if (selectedItem === 'urgent') {
    inputMemo.className = 'item selectChangeR';
  } else {
    inputMemo.className = 'item';
  }

}

// 存檔
function save (){
  let list = document.querySelectorAll('#list li');
  let listData = [];
  list.forEach((li) =>{
    let liType = li.className;
    let check = li.children[0].className;
    let content = li.children[1].textContent;
    let finish = li.children[2].textContent;
    
    let liObj = {
      liType : liType,
      check : check,
      content : content,
      finish : finish,  
    };
    listData.push(liObj);
    
  })
  
  localStorage.setItem('saveData', JSON.stringify(listData));
  alert('儲存成功!!');
}

// 取出已存檔案
if (localStorage.getItem('saveData')){
  let getData = JSON.parse(localStorage.getItem('saveData'));
  for (let i = 0; i < getData.length; i++){
    let savedList = document.querySelector('#list');
    
    let saveLi = document.createElement('li')
    let iconC = document.createElement('i')
    let printText = document.createElement('span');
    let showFinish = document.createElement('span');
    let iconDel = document.createElement('i');
    
    saveLi.className = getData[i].liType;
    
    iconC.className = getData[i].check;
    iconC.addEventListener('click', downToggle);
    
    printText.textContent = getData[i].content;
    printText.className = 'printText';
    
    showFinish.textContent = getData[i].finish;
    showFinish.className = 'finish'
    
    iconDel.className = 'fa-solid fa-trash-can delIcon';
    iconDel.onclick = delContent;
    
    savedList.append(saveLi);
    saveLi.append(iconC, printText, showFinish, iconDel);
  }
}



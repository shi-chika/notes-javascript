let todos = [
    {
      title: "倒垃圾",
      category: "normal",
      isCompleted: false
    },
    {
      title: "繳電話費",
      category: "important",
      isCompleted: false
    },
    {
      title: "採買本週食材",
      category: "urgent",
      isCompleted: false
    }
  ];
  // 印出存檔資料
  if(localStorage.getItem("savedData") ){
    todos = JSON.parse(localStorage.getItem("savedData"));
  }
  
  function add() {
    let input = document.querySelector("#userAdd");
    let select = document.querySelector("#type");
  
    let selected = select.options[select.selectedIndex];
    let newInput = {
      title: input.value,
      category: selected.value,
      isCompleted: false
    };
    todos.push(newInput);
  
    render();
    input.value = "";
  }
  
  
  function render() {
    let root = document.querySelector("#root");
    root.textContent = "";
    let ul = document.createElement("ul");
    root.append(ul);
  
    for (let index in todos) {
      let li = document.createElement("li");
      let check = document.createElement("i");
      let text = document.createElement("span");
      let complete = document.createElement("span");
      let delBtn = document.createElement("button");
  
      check.className = "fa-regular fa-square";
      text.textContent = todos[index].title;
      text.className = "text";
      complete.className = "complete";
      delBtn.className = "fa-regular fa-trash-can";
      li.append(check, text, complete, delBtn);
      ul.append(li);
  
      if (todos[index].isCompleted) {
        complete.textContent = "[完成]";
        check.className = "fa-solid fa-check";
      } else {
        complete.textContent = "[未完成]";
        check.className = "fa-regular fa-square"
      }
      if (todos[index].category === "important") {
        text.style.color = "orange";
      } else if (todos[index].category === "urgent") {
        text.className = "urgent text";
      }
      check.onclick = () => {
        if (todos[index].isCompleted) {
          todos[index].isCompleted = false;
        } else {
          todos[index].isCompleted = true;
        }
        render();
      };
      delBtn.onclick = () => {
        todos.splice(index, 1);
        render();
      };
  
    }
  }
  
  
  function print() {
    let num = 1;
    let str = "";
    for(let item of todos){
      if(item.category === "normal"){
        str += `${num}. ${item.title} \n `
      }else if(item.category === "important"){
         str += `${num}. **${item.title}** \n `
      }else if(item.category === "urgent"){
         str += `${num}. ***${item.title}*** \n `
      }
      num++
   }
    alert(str);
  }
  
  // 存檔
  function save(){
    localStorage.setItem("savedData", JSON.stringify(todos));
    alert('儲存成功!!');
  }
  
  render();
  
  
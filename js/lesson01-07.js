function order() {
    let getName = document.getElementById("input_name").value;
  
  
    let typeData = document.getElementById("type");
    let typeIndex = typeData.selectedIndex;
    let getType = typeData.options[typeIndex].value;
  
    let itemData = document.getElementById('item');
    let itemIndex = itemData.selectedIndex;
    let getItem = itemData.options[itemIndex].value;
  
    let getCount = document.getElementById('input_count').value;
    let num_getCount = parseInt(getCount);
  
    if (getName !== "") {
      if (getType === "none") {
        alert('カテゴリを選択してください。');
      } else if (getItem === "none") {
        alert('アイテムを選択してください。');
      } else if (getCount === "") {
        alert('数量を入力してください。');
      } else if (num_getCount < 3) {
        alert('申し訳ありませんが、最低購入数量は3です。')
      } else if (num_getCount > 20) {
        alert('申し訳ありませんが、最高購入数量は20です。')
      } else {
        alert(getName + '\nご注文いただき、ありがとうございます。\n下記、表示される購入明細に間違いないかご確認ください。')
        document.getElementById("orderName").textContent = getName;
  
        document.getElementById("orderType").textContent = getType;
        document.getElementById('orderItem').textContent = getItem;
        document.getElementById('orderCount').textContent = getCount;
  
        if (getType === "メンズ") {
          let price = parseInt(getCount) * 1899
          document.getElementById('orderPrice').textContent = price + "円";
          alert("今だけお得！！今日注文いただければ、メンズのネクタイをプレゼントいたします！");
        } else if (getType === "レディース") {
          let price = parseInt(getCount) * 1499
          document.getElementById('orderPrice').textContent = price + "円";
          alert("今だけお得！！今日注文いただければ、レディースのスカーフをプレゼントいたします！");
        }
      }
  
    } else {
      alert('お名前を入力してください。')
    }
  
  
  
  }
  
  
  function about() {
    alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！");
  }
  
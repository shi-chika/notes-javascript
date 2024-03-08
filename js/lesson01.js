function order() {
    let pickName = document.getElementById('input_name').value;
    let Qty = document.getElementById('input_Qty').value;
  
    // 取出選擇項目 款式
    let kindData = document.getElementById('kind');
    let kindIndex = kindData.selectedIndex;
    let pickKind = kindData.options[kindIndex].text;
    let pickKindValue = kindData.options[kindIndex].value;
  
    // 取出選擇項目 商品
    let itemsData = document.getElementById('item');
    let itemsIndex = itemsData.selectedIndex;
    let pickItem = itemsData.options[itemsIndex].text;
    let pickItemValue = itemsData.options[itemsIndex].value;
  
  
    if (pickName !== "") {
      if (pickKindValue === "none") {
        alert("請選擇款式");
      } else if (pickItemValue === "none") {
        alert("請選擇商品");
      } else if (Qty === "") {
        alert("請輸入數量");
      } else if (Qty < 100) {
        alert("抱歉，我們工廠的最低出貨量是 100 件");
      } else if (Qty > 5000) {
        alert("抱歉，我們工廠的最高出貨量是 5,000 件");
      } else {
        alert("Hello!" + pickName + " \n謝謝您對我們的商品有興趣！ 請致電 0987-654-321，會有專人提供您報價！");
        if (pickKind === "秋冬款") {
            alert('新品上架!!今天下單送保暖圍巾!!');
            let price = parseInt(Qty) * 600
            document.getElementById('order_price').textContent = price + "元";
          } 
          
        else if (pickKind === "春夏款") {
            alert('換季優惠!!今天下單送帆布提袋!!');
            let price = parseInt(Qty) * 500
            document.getElementById('order_price').textContent = price + "元";
          }

        document.getElementById('order_name').textContent = pickName;
        // 印出選擇項目 款式 商品
        document.getElementById('order_kind').textContent = pickKind;
        document.getElementById('order_item').textContent = pickItem;
        //印出數量
        document.getElementById('order_Qty').textContent = Qty;
      }
  
    } else {
      alert("請輸入姓名");
    }
  
  }
  
  
  function about() {
    let pickName = document.getElementById('input_name').value;
    alert(`${pickName} 我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！！`);
  }
  
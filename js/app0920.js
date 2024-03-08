let age = prompt("請輸入年齡:");
age = Number(age);

if (age >=0 && age <= 12 ){
    alert("兒童票一張100元");
}else if (age > 12 && age <= 65 ){
    alert("成人票250元");
}else if (age > 65 && age <=130){
    alert("敬老票一張150元");
}else {
    alert("請輸入正確年齡");
}
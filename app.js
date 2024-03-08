
const lessonTitles = document.querySelectorAll('.lesson-title');
for (let item of lessonTitles){
    item.onclick = toggleShow;
}

function toggleShow(e){
  const title = e.target;
  const content = e.target.nextElementSibling;
  if( !content.style.maxHeight){
    content.style.maxHeight = content.scrollHeight + 'px';
    title.classList.toggle('icon-up');
  }else{
    content.style.maxHeight = '';
    title.classList.toggle('icon-up');
  }
    
}
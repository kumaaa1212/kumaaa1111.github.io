// mainimg
{
  const image = ['./image/mainimg1.jpg', './image/mainimg2.jpg', './image/mainimg3.jpg'];
  const mainimg = document.getElementById('mainimg');
window.onload = mainimg.src = image[2];
  let i = -1;
  function showimg() {
    if (i === 2) {
      i = 0;
    }
    else {
      i++
    }
    mainimg.animate(
      [
        {opacity:0}, 
        {opacity:1}  
      ], 
      {
        duration: 2000, 
        easing: 'linear', 
      },
      ); 
      mainimg.src = image[i];
  }
  setInterval(showimg,6000);
}
{
  const menu = document.getElementById('headmenu');
  const showmenu = document.getElementById('showmenu');
  menu.addEventListener('click', () =>{
    showmenu.classList.add('show');
    menu.classList.add('hidden');
  })
  showmenu.addEventListener('click', () =>{
    showmenu.classList.remove('show');
  
    menu.classList.remove('hidden');
  })
}

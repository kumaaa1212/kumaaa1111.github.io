
{
  const menu = document.getElementById('headmenu');
  const showmenu = document.getElementById('showmenu')
  menu.addEventListener('click', () =>{
    showmenu.classList.add('show');
    menu.classList.add('hidden');
  })
  showmenu.addEventListener('click', () =>{
    showmenu.classList.remove('show');
    menu.classList.remove('hidden');
  })
}


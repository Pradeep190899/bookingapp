const btn = document.getElementById('bt')
btn.addEventListener('click', save) ;
function save(e)
{
e.preventDefault();
let name = document.getElementById('name').value ;
let mail = document.getElementById('mail').value;
let phone = document.getElementById('no').value;
localStorage.setItem(phone , name)
console.log(localStorage.getItem('name'))
}

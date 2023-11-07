
//window.addEventListener('DOMContentLoaded', getdata)
const btn = document.getElementById('bt')
btn.addEventListener('click', save) ;
async function save(e)
{
    try {
        e.preventDefault();
let name = document.getElementById('name').value ;
let mail = document.getElementById('mail').value;
let phone = document.getElementById('no').value;
const obj = {
    name,mail,phone
}
let resp = await axios.post('https://crudcrud.com/api/39a7cc29969b478f9f428fb18787a04d/post' ,obj )
window.location.reload()


    } catch (err) {
        console.log(err) ;
    }
}

    async function getdata()
    {
        try {
            let res = await axios.get('https://crudcrud.com/api/39a7cc29969b478f9f428fb18787a04d/post')
            console.log(res.data)
            
            for(let i =0 ;i<res.data.length ;i++) {
                showdata(res.data[i])
            }
        }
        catch(err){
            console.log(err)
        }
    }
    async function showdata(obj)
    {
        try {
           
                let newlist = document.createElement('li')
                //newlist.innerHTML = localStorage.getItem(phone)
                let ulist = document.getElementById('additemul')
                newlist.textContent = obj.name + '-' +obj.mail+ '-'+obj.phone;
               
                
                //delete
                let dlt = document.createElement('input') ;
                dlt.type = 'button'
                dlt.id = obj._id ;
                dlt.value = 'delete'
                newlist.appendChild(dlt)
                dlt.onclick = (e) => {
                    let id= e.target.id
                    console.log(id)
                    axios.delete(`https://crudcrud.com/api/39a7cc29969b478f9f428fb18787a04d/post/${id}`)
                    .then(window.location.reload()) ;
                    
                   //newlist.appendChild(ulist) 
            }
            ulist.appendChild(newlist) ;
        
    }
    catch(err){
        console.log(err)
    }
    }
// let newdiv = document.createElement('div')
// newdiv.id = 'insertdiv' ;
// newdiv.innerHTML = localStorage.getItem(phone) 
// let adddiv = document.getElementById('additem')
// adddiv.appendChild(newdiv) ;

// console.log(localStorage.getItem(phone))
// let newlist = document.createElement('li')
// newlist.innerHTML = localStorage.getItem(phone)
// let ulist = document.getElementById('additemul')
// ulist.appendChild(newlist) ;
// ulist.textContent = obj.name + '-' +obj.mail+ '-'+obj.phone;
// //delete
// let dlt = document.createElement('input') ;
// dlt.type = 'button'
// dlt.id = phone ;
// dlt.value = 'delete'
// ulist.appendChild(dlt)
// dlt.onclick = () => {
//     localStorage.removeItem(phone)
//     newlist.appendChild(ulist)
// }
// //edit
// let edit = document.createElement('input')
// edit.type = 'button'
// edit.id = 'edt'
// edit.value = 'edit'
// ulist.appendChild(edit)
// edit.onclick = () => {
//     localStorage.removeItem(phone)
//     //newlist.appendChild(ulist)
// }


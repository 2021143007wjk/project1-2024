function xbtncl(e){
    pnode = e.target.parentNode
    list = document.getElementById('todolist')
    list.removeChild(pnode)
}

function additem(){
    console.log('additem')

    todo = document.getElementById('item')
    list = document.getElementById('todolist')

    listitem = document.createElement('li')
    listitem.innerText = todo.value
    listitem.className = 'list-group-item list-group-item-action list-group-item-warning';

    xbtn = document.createElement('button')
    xbtn.innerHTML = '&times'

    // 온클릭 지원방법
    // xbtn.onclick = xbtncl

    // xbtn.onclick = function(e){
    //     pnode = e.target.parentNode
    //     list.removeChild(pnode)
    // }

    xbtn.onclick = (e)=>{
        pnode = e.target.parentNode
        list.removeChild(pnode)
    } 
    xbtn.className = 'close'

    listitem.appendChild(xbtn)

    cbtn = document.createElement('button')
    cbtn.innerHTML = '&#33'

    cbtn.onclick = (e)=>{
        pnode = e.target.parentNode
        // const a = document.createElement('del')
        list.style.textDecoration = 'line-through'
        if (list.style.textDecoration == 'line-through'){
            lsit.style.textDecoration = 'None'
        }

        // listitme.appendChild(a)
    }
    cbtn.className = 'close'

    listitem.appendChild(cbtn)

    list.appendChild(listitem)

    todo.value = ''
    todo.focus()
}
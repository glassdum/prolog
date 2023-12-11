const monBox = document.getElementById('mon')
const dayBox = document.getElementById('day')
const weekBox = document.getElementById('week')
const hourBox = document.getElementById('hour')
const minBox = document.getElementById('min')
const secBox = document.getElementById('sec')


let data = new Date();
let month = data.getMonth() + 1;
let days = data.getDate();
let week = data.getDay();
let hour = data.getHours();
let minute = data.getMinutes();
let seconds = data.getSeconds();

function time(){
    let data = new Date();
    let month = data.getMonth() + 1;
    let days = data.getDate();
    let week = data.getDay();
    let hour = data.getHours();
    let minute = data.getMinutes();
    let seconds = data.getSeconds();

    function tw(n){
        if(n<10){
            return '0' + n
        }else{
            return n
        }
    }
    let sec = tw(seconds)

    let weeklist = [`일`,`월`,`화`,`수`,`목`,`금`,`토`]
    monBox.innerHTML = month + '월'
    dayBox.innerHTML = days + '일'
    weekBox.innerHTML = weeklist[week] + '요일'
    hourBox.innerHTML = hour + '시'
    minBox.innerHTML = minute + '분'
    secBox.innerHTML = sec
};
setInterval(function(){
    time()
},1)

let textarea = document.getElementById('text_area');
let add = document.getElementById('plus');
let tab = document.querySelectorAll('.list_box>li');
let dele = document.getElementById('del');
let listbox = document.getElementById('wrap_box');
let first = document.getElementById('fir');
let second = document.getElementById('scd');
let third = document.getElementById('thr');
console.log(tab)

let todolist = [];

textarea.addEventListener('keypress',function(e){
    // const code = e.code;
    // if(code == `Enter`){
    //     addlist();
    // };
    if(e.keyCode == 13){
        addlist();
    }
})

for(let i = 0; i<tab.length; i++){
    tab[i].addEventListener('click',function(e){
        for(let a = 0; a<tab.length; a++){
            tab[a].classList.remove('on');
            e.target.classList.add('on');
        }
    })
};


function addlist(){
    let contents = {
        id: Date.now(),
        num : todolist.length + 1,
        data: textarea.value,
        day:`${month}월 ${days}일, ${hour}시 ${minute}분`,
        complete:false,
    };
    todolist.unshift(contents);
    console.log(todolist);
    textarea.value = '';
    listView();
}

console.log(listbox);

function listView(){
    let res = '';
    for(let i = 0; i<todolist.length; i++){
        if(todolist[i].complete == true){
            res += `<div class="list">
            <p class="done">${todolist[i].data}<span>${todolist[i].day}</span></p>
            <div class="btn">
                <button><img src="./images/check.png" alt="check" onclick="donelist(${todolist[i].id})"></button>
                <button><img src="./images/trash.png" alt="delete" onclick="dellist(${todolist[i].id})"></button>
            </div>
        </div>`
        } else {
            res += `<div class="list">
            <p>${todolist[i].data}<span>${todolist[i].day}</span></p>
            <div class="btn">
                <button><img src="./images/check.png" alt="check" onclick="donelist(${todolist[i].id})"></button>
                <button><img src="./images/trash.png" alt="delete" onclick="dellist(${todolist[i].id})"></button>
            </div>
        </div>`
        }
    }
    listbox.innerHTML = res;
    textarea.value = '';
}

function donelist (id){
    for(let i = 0; i<todolist.length; i++){
        if(todolist[i].id == id){
            todolist[i].complete = !todolist[i].complete;
            break;
        }
    }
    listView();
}
function dellist (id){
    for(let i = 0; i<todolist.length; i++){
        if(todolist[i].id == id){
            todolist.splice(i,1);
            break;
        }
    }
    listView();
}

function comtrue (){
    let res = '';
    for(let i = 0; i<todolist.length; i++){
        if(todolist[i].complete == true){
            res += `<div class="list">
            <p class="done">${todolist[i].data}<span>${todolist[i].day}</span></p>
            <div class="btn">
                <button><img src="./images/check.png" alt="check" onclick="donelist(${todolist[i].id})"></button>
                <button><img src="./images/trash.png" alt="delete" onclick="dellist(${todolist[i].id})"></button>
            </div>
        </div>`
        }
    }
    listbox.innerHTML = res;
    textarea.value = '';
}
function comfalse (){
    let res = '';
    for(let i = 0; i<todolist.length; i++){
        if(todolist[i].complete == false){
            res += `<div class="list">
            <p>${todolist[i].data}<span>${todolist[i].day}</span></p>
            <div class="btn">
                <button><img src="./images/check.png" alt="check" onclick="donelist(${todolist[i].id})"></button>
                <button><img src="./images/trash.png" alt="delete" onclick="dellist(${todolist[i].id})"></button>
            </div>
        </div>`
        }
    }
    listbox.innerHTML = res;
    textarea.value = '';
}
first.addEventListener('click',listView);
second.addEventListener('click',comfalse);
third.addEventListener('click',comtrue);
add.addEventListener('click',addlist);
dele.addEventListener('click',function(){
    todolist=[];
    listView();
})
let task = document.getElementById("task");
let list = document.getElementById("list");
let liveToastBtn = document.getElementById("liveToastBtn");
let close = document.getElementsByClassName("close");
let todosArray = []; 


document.addEventListener("DOMContentLoaded",function(event){
    putListToMyArray();
    deleteToDo();   
    checkToDo();
});


function putListToMyArray(){
    getFromLocalStorage()
    $('#list > li').each(function(){
        var str = $(this).text();
        todosArray.push(str.substring(0, str.length-1));
    });
}


task.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        liveToastBtn.click();
    }
})

function addToDo(){
    if(task.value.trim().length == 0){
        $(document).ready(function(){
            $(".error").toast("show");
        });
    }
    else{
        list.innerHTML += `
        <li class="text-wrap">${task.value}<span class="close">x</span></li>
        `;
        $(document).ready(function(){
            $(".success").toast("show");
        });
        todosArray.push(task.value);
        setToLocalStorage();
    }
    deleteToDo();   
    task.value = "";
    task.placeholder = "Bugün ne yapacaksın?";
}



function deleteToDo(){
    for (let index = 0; index < close.length; index++) {
        close[index].onclick = function(){
            this.parentElement.style.display = "none";
            let str = $(this.parentElement).text();
            let newStr = str.substring(0, str.length-1)
            let index = todosArray.indexOf(newStr);
            if(index !==-1){
                todosArray.splice(index,1);
            }
            setToLocalStorage();            
        }
        
    }
}

function checkToDo(){
    list.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
      }
    });
}

function setToLocalStorage(){
    localStorage.setItem("toDos", JSON.stringify(todosArray));
}

function getFromLocalStorage(){
    let objFromStorage = JSON.parse(localStorage.getItem("toDos"));
    if (objFromStorage.length == 0) {
        list.innerHTML += `
        <li>3 Litre Su İç<span class="close">x</span></li>
        <li>Ödevleri Yap<span class="close">x</span></li>
        <li>En Az 3 Saat Kodlama Yap<span class="close">x</span></li>
        <li>Yemek Yap<span class="close">x</span></li>
        <li>50 Sayfa Kitap Oku<span class="close">x</span></li>`
    }
    else{
        objFromStorage.forEach((element)=> 
        list.innerHTML += `
        <li class="text-wrap">${element}<span class="close">x</span></li>`
        );
    }
}
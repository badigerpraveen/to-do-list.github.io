
const todoList = document.querySelector('.todolist');
const input = document.querySelector('.enterlist');
const form = document.querySelector('.to-form-form');
form.addEventListener('submit',(e)=>{ 
    e.preventDefault();
    let text = input.value;
    if( text === " "){
        alert("enter text");
    }
    else{
        let item = document.createElement("li"); 
        let span = document.createElement("span");
        let  icon = document.createElement("i");
        let btn = document.createElement("input");
        btn.setAttribute("type", "checkbox"); 
        btn.setAttribute("id", "checkbox"); 
       
           // btn.innerHTML = "click-me" ;
              //todoList.appendChild
          
        todoList.appendChild(item);
        item.appendChild(btn);
        item.appendChild(span);
        span.innerHTML =`<span class="line"> ${text}</span>`; 
        span.appendChild(icon);
        icon.classList.add("fa","fa-times-circle"); 
        //item.classList.add("to-do-text");
        input.value = " "; 
        icon.addEventListener('click',()=>{
          item.remove();
          
        }); 
        btn.addEventListener('click',()=>{
            if (btn) {
               // console.log("Checkbox is checked..");
                //document.querySelector(".to-do-text").style.textDecoration = "line-through";
                span.classList.toggle("to-do-text");
              } else {
                alert("click check box");
              }
        });
       
    }
   

});






let btn = document.querySelector(".btn");
let form = document.querySelector(".content");
let add = document.querySelector(".add")
btn.addEventListener("click", addNewTodo);

function addNewTodo(event) {
   
  let inputval = add.value; 
  let container = document.createElement("div");
  let newContent = document.createTextNode("");
  let div = document.createElement("div");
  let divContent = document.createTextNode("");
  let h4 = document.createElement("h4");
  let h4Content = document.createTextNode(inputval);
  let checkbox = document.createElement("input");
  let Remove = document.createElement("span");
  let RemoveContent = document.createTextNode("Remove");
  
    if (inputval) {

        container.appendChild(newContent);
        form.appendChild(container);

        div.appendChild(divContent);
        container.appendChild(div);

        h4.appendChild(h4Content);
        div.appendChild(h4);

        checkbox.setAttribute("type", "checkbox");
        div.appendChild(checkbox);

        Remove.appendChild(RemoveContent);
        div.appendChild(Remove);

        container.classList.add("newContainer");
        Remove.classList.add("rem");
        div.classList.add("newItem");

    }else{
        add.placeholder = '**Inert something here**'
      
    }

        let Removes = document.querySelectorAll(".rem");
        for (Remove = 0; Remove < Removes.length; Remove++) {
            Removes[Remove].addEventListener("click", removeTodo);
        }
        function removeTodo() {           
            this.parentElement.parentElement.remove();
    }     
}

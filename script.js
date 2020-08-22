let btn = document.querySelector(".btn");
let form = document.querySelector(".content");

btn.addEventListener("click", addNewTodo);
function addNewTodo(event) {
  let container = document.createElement("div");
  let newContent = document.createTextNode("");
  let div = document.createElement("div");
  let divContent = document.createTextNode("");
  let h4 = document.createElement("h4");
  let h4Content = document.createTextNode("Todo");
  let checkbox = document.createElement("input");
  let Remove = document.createElement("span");
  let RemoveContent = document.createTextNode("Remove");

  container.appendChild(newContent);
  form.appendChild(container);
  container.classList.add("newContainer");

  div.appendChild(divContent);
  container.appendChild(div);

  h4.appendChild(h4Content);
  div.appendChild(h4);

  checkbox.setAttribute("type", "checkbox");
  div.appendChild(checkbox);

  Remove.appendChild(RemoveContent);
  div.appendChild(Remove);
  Remove.classList.add("rem");
  div.classList.add("newItem");
  let Removes = document.querySelectorAll(".rem");

  for (Remove = 0; Remove < Removes.length; Remove++) {
    Removes[Remove].addEventListener("click", removeTodo);
  }
  function removeTodo() {
    this.parentElement.parentElement.remove();
  }
}

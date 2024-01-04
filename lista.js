const input = document.querySelector("input");
const btn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingrese una tarea.",
    });
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
  });

  return deleteBtn;
}

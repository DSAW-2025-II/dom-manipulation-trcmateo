const form = document.getElementById("ToDoForm");
const input = document.getElementById("Form-input");
const list = document.getElementById("toDo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const text = input.value.trim();
  if (text === "") return;


  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `
    <input type="checkbox" class="check">
    <span>${text}</span>
    <button class="delete">❌</button>
  `;

  li.querySelector(".check").addEventListener("change", () => {
    li.classList.toggle("completed");
  });

  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
  });

  list.appendChild(li);

  input.value = "";
});

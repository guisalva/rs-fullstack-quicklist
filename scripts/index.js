const form = document.querySelector("form");
const input = document.querySelector("#item");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#checklist");
const toast = document.querySelector(".toast");

// Remover caracteres especiais
input.addEventListener("input", () => {
  const validCharacterRegex = /[^\p{L}\p{N} ]/gu;
  input.value = input.value.replace(validCharacterRegex, "");
});

// Adicionar item
form.addEventListener("submit", (event) => {
  event.preventDefault();

  addItem(input.value);
  input.value = "";
});

// Remover item
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-icon")) {
    const li = event.target.closest("li");
    li.remove();
    showToast();
  }
});

// Fechar aviso manualmente
toast.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-icon")) {
    hideToast();
  }
});

function addItem(item) {
  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" id="${item}" class="checkbox" />
    <label for="${item}">${item}</label>
    <img class="delete-icon" src="assets/icons/trash-bin.svg" alt="Ícone de lixeira" />
  `;
  list.appendChild(li);
}

function showToast() {
  toast.classList.remove("hidden");
}

function hideToast() {
  toast.classList.add("hidden");
}

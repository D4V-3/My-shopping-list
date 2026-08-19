const ul = document.querySelector("ul");

const input = document.querySelector("input");

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    event.preventDefault();

    const item = input.value;
    input.value = "";

    const list = document.createElement("li");
    const itemText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    list.appendChild(itemText);
    list.appendChild(deleteBtn);
    itemText.textContent = item;
    deleteBtn.textContent = "Delete";
    ul.appendChild(list);

    deleteBtn.addEventListener("click", () => {
        ul.removeChild(list);
    });

    input.focus();
})
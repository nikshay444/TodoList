

document.querySelector("#inputText").addEventListener("keydown",  (event)=> {
    if (event.key === "Enter")
    {
        const input = document.querySelector('#inputText');
        if (input.value.trim() !== "") {
            addItem(input.value.trim());
        }
        else {
            alert("Please Enter Valid Items")
        }
    }
})
document.querySelector("#addItem").addEventListener("click", () => {
    const input = document.querySelector("#inputText");
    if (input.value.trim() !== "") {
        addItem(input.value.trim())
    }
})

const addItem=(input) => {
    const item = document.createElement("div");
    const div = document.createElement("div");
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");
    const text = document.createElement("p");

    item.className = "item";
    item.textContent = input;

    checkIcon.className = "fas fa-check-square";
    // checkIcon.style.color = "lightgray";
    checkIcon.setAttribute =( "arial-label", "Mark as completed");
    checkIcon.setAttribute = ("role", "button");
    checkIcon.addEventListener("click", () => {
        checkIcon.style.color = checkIcon.style.color === "limegreen" ? "lightgray" : "limegreen";
        item.classList.toggle("completed");
    });
    div.appendChild(checkIcon);
    trashIcon.className = "fas fa-trash";
    // trashIcon.style.color = "darkgray";
    trashIcon.setAttribute = ("arial-label", "Dekete the Items");
    trashIcon.setAttribute = ("role", "button");
    trashIcon.addEventListener("click", () => {
        item.remove();
    })
    div.appendChild(trashIcon);

    item.appendChild(text);
    item.appendChild(div);

    document.querySelector("#toDoItems").appendChild(item);
     document.querySelector("#inputText").value = "";
}

// // Load saved items on page load
// document.addEventListener("DOMContentLoaded", loadItems);

// function loadItems() {
//   const savedItems = JSON.parse(localStorage.getItem("toDoItems")) || [];
//   savedItems.forEach((itemText) => addItem(itemText));
// }

// function saveItems() {
//   const items = Array.from(document.querySelectorAll(".item p")).map((p) => p.textContent);
//   localStorage.setItem("toDoItems", JSON.stringify(items));
// }

// const addItem = (input) => {
//   // (Existing addItem code here)

//   // Save updated list to localStorage after adding item
//   saveItems();
// };

// // Update saveItems() in the trashIcon click event as well to save the updated list.
// trashIcon.addEventListener("click", () => {
//   item.remove();
//   saveItems(); // Update localStorage
// });

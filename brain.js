function add(event) {
    event.preventDefault(); // Prevent form submission

    let task = document.getElementById("inputbox").value.trim();
    if (task !== "") {
        let list = document.querySelector('.listd');
        let createdTask = document.createElement("li");
        createdTask.textContent = task;
        createdTask.className = "task-item";
        createdTask.id = "list" // Add a class to the task item

        // Create the close button span
        let createSpan = document.createElement('span');
        createSpan.className = "close-btn large material-icons";
        createSpan.innerText = "close";
        createSpan.id = "close";

        // Append the close button to the task item
        createdTask.appendChild(createSpan);

        // Append the task item to the task list
        list.appendChild(createdTask);

        document.getElementById("inputbox").value = ""; // Clear input field
    } else {
        alert("Please enter a task.");
    }
}

// Event delegation to handle deletion of task items
document.querySelector('.listd').addEventListener('click', function(event) {
    if (event.target.classList.contains('close-btn')) {
        event.target.parentElement.remove(); // Remove the parent <li> element
    }
});

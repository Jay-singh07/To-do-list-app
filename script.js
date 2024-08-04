// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        // Add a button to remove the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Add a click event to mark the task as completed
        li.onclick = function() {
            li.classList.toggle('completed');
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

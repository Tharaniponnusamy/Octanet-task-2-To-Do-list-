document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;
    span.addEventListener('click', function() {
        this.classList.toggle('complete');
    });

    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.addEventListener('click', function() {
        this.parentElement.remove();
    });

    li.appendChild(span);
    li.appendChild(button);
    document.getElementById('task-list').appendChild(li);
    document.getElementById('new-task').value = '';
});

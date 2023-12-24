class View {
    constructor(controller) {
        this.controller = controller;
        this.deleteButtons = [];
        this.listContainer = document.querySelector('.container__list');
        this.textareaBtn = document.querySelector('#textareaBtn');
        this.textarea = document.querySelector('#textarea');
    }

    setUpDeleteListener() {
        this.deleteButtons = document.querySelectorAll('.container__elementDeleteBtn');
        this.deleteButtons.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.controller.handleDeleteClick(index);
            });
        });
    }

    createListElement(innerText) {
        const taskElement = document.createElement('li');
        taskElement.className = 'container__listElement';
        taskElement.innerHTML =
            `${innerText}<a class="container__elementDeleteBtn">Delete</a>`;

        return taskElement;
    }

    renderTasks(tasks) {
        this.listContainer.innerHTML = '';
        tasks.forEach((innerText) => {
            const taskElement = this.createListElement(innerText);
            this.listContainer.appendChild(taskElement);
        });
        this.setUpDeleteListener();
    }

    getTask() {
        this.textareaBtn.addEventListener('click', () => {
            const newTask = this.textarea.value;
            this.controller.addTask(newTask);
        });
    }

    update(data) {
        this.renderTasks(data);
    }
}
export default View;

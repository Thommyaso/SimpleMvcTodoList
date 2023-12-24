import View from './view';

class Controller {
    constructor(model) {
        this.model = model;
        this.view = new View(this);
        this.model.addObserver(this.view);
        this.listen = this.view.getTask();
    }

    initialize(tasks) {
        this.view.renderTasks(tasks);
    }

    addTask(task) {
        this.model.addTask(task);
    }

    handleDeleteClick(index) {
        this.model.removeTask(index);
    }
}

export default Controller;

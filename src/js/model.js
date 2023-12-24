class Model {
    constructor() {
        this.tasks = ['go do this', 'go do that', 'king in the castle', 'uauauiua'];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers(data) {
        this.observers.forEach((observer) => observer.update(data));
    }

    removeTask(index) {
        console.log(index);
        this.tasks.splice(index, 1);
        this.notifyObservers(this.tasks);
    }

    addTask(task) {
        this.tasks.push(task);
        this.notifyObservers(this.tasks);
    }
}

export default Model;

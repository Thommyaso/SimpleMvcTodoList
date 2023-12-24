class View {
    constructor(controller) {
        this.controller = controller;
        this.deleteButton = document.querySelector('.container__elementDeleteBtn');
        this.deleteButton.addEventListener('click', () => this.handleButtonClick());
    }

    handleButtonClick() {
        this.controller.handleClick();
    }

    init() {
        return console.log('initialized');
    }
}
export default View;

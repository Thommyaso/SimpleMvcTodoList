import '../styles/style.scss';

import View from './view';
import Controller from './controller';

document.addEventListener('DOMContentLoaded', () => {
    const controller = new Controller();
    const view = new View(controller);

    view.init();
});

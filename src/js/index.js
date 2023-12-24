import '../styles/style.scss';

import Controller from './controller';
import Model from './model';

document.addEventListener('DOMContentLoaded', () => {
    const model = new Model();
    const controller = new Controller(model);
    controller.initialize(model.tasks);
});

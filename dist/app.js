"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input'); // Gives access to template with conent
        this.hostElement = document.getElementById('app'); // Holds reference to template content
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const prjInput = new ProjectInput();

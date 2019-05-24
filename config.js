const files = ['basic.js'];
const filesCount = files.length;
const path = 'javascript/';

(function addScriptFiles() {
    const root = document.getElementsByTagName('BODY')[0];
    for (let i = 0; i < filesCount; ++i) {
        const script = document.createElement("script");
        script.setAttribute("src", path + files[i]);
        root.appendChild(script);
    }
})();

(function drowTasks() {
    const mainLayout = document.getElementsByTagName('main')[0];
    const taskLength = tasks.length;



    for (let i = 0; i < taskLength; ++i) {
        const section = template(tasks[i].description, i);
        mainLayout.appendChild(section);
    }
})();

function template(taskDescription, index) {
    const functionNumber = index + 1;
    const section = document.createElement('section');
    const containerFluid = document.createElement('div');
    const containerRow = document.createElement('div');
    const column_1 = document.createElement('div');
    const column_2 = document.createElement('div');
    const dataElement = document.createElement('div');
    const button = document.createElement('button');

    containerFluid.setAttribute('class', 'container-fluid');
    containerRow.setAttribute('class', 'row');
    column_1.setAttribute('class', 'col-sm-12 col-md-12 col-lg-5 col-xl-5');
    column_2.setAttribute('class', 'col-sm-12 col-md-12 col-lg-5 col-xl-5');
    dataElement.setAttribute('class', 'data-element');
    button.setAttribute('onclick', 'func' + functionNumber + '()');

    dataElement.textContent = taskDescription;
    button.textContent = 'go';
    column_1.appendChild(dataElement);
    column_2.appendChild(button);
    containerRow.appendChild(column_1);
    containerRow.appendChild(column_2);
    containerFluid.appendChild(containerRow);
    section.appendChild(containerFluid);

    return (
        section
    )
}
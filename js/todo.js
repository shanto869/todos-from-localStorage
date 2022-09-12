// get element by id
const getElement = (id) => {
    const element = document.getElementById(id);
    return element;
}


// add onclick for the + btn
const handleSubmit = () => {
    const inputField = document.getElementById('todo-text');

    // get input field value
    const inputValue = getElement('todo-text').value;
    inputField.value = '';

    // get todos value from the local storage
    const todosString = localStorage.getItem('todos');
    const todos = JSON.parse(todosString);

    if (!todos) {
        const todosList = [{ title: inputValue, completed: false }];
        localStorage.setItem('todos', JSON.stringify(todosList));
    }
    else {
        const todosList = [...todos, { title: inputValue, completed: false }];
        localStorage.setItem('todos', JSON.stringify(todosList))
    }
    render()

}

// display todos from the local storage
const render = () => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    const ul = getElement('todo-list');
    ul.textContent = ''
    if (todos) {

        todos.forEach(item => {
            if (!!item.title) {
                const li = document.createElement('li');
                li.classList.add('py-2')
                li.innerText = item.title;
                ul.appendChild(li)
            }

        })
    }
}

render();

// clear todos from the local storage
const handleClearAll = () => {
    localStorage.removeItem('todos');
    render()
}

const app = {
    title: 'Indecision Appz',
    subtitle: 'computeling',
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value; // In general, e.target.elements.{name}.value;
    if (option)
        app.options.push(option);
    e.target.elements.option.value = '';
    render();
};

const app_root = document.getElementById('app');

const on_click_remove_all = () => {
    app.options = [];
    render();
};

const rand_option = () => {
    const idx = Math.floor(Math.random() * app.options.length);
    const pick = app.options[idx];
    alert(pick);
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? 'here are your options:' : 'no options'}</p>
            <p>{app.options.length > 0 && app.options.length}</p>
            <button id="remove_all" onClick={on_click_remove_all}>Remove All</button>
            <button id="choose_option" onClick={rand_option} disabled={app.options.length <= 0}>What Should I Do?</button>
            <ol>
                <li>item one</li>
                <li>item two</li>
            </ol>
            <ol>
                {
                    app.options.map((opt) => {
                        return <li key={opt}>Option: {opt}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, app_root);
};

render();

console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
    title: 'Indecision Appz',
    subtitle: 'computeling',
    options: ['uno', 'dos',],
};


const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? 'here are your options:' : 'no options'}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const user = {
    name: 'Jason Ventresca',
    age: '27',
    location: 'New York'
};

const template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);

let count = 0;

const plus_one = () => {
    count++;
    render_app();
};

const minus_one = () => {
    count--;
    render_app();
};

const reset = () => {
    count = 0;
    render_app();
};

const appRoot = document.getElementById('app');

const render_app = () => {
    const template3 = (
        <div>
            <h1>
                count: {count}
            </h1>
            <button id='plus-one' onClick={plus_one}> +1 </button>
            <button id='minus-one' onClick={minus_one}> -1 </button>
            <button id='reset' onClick={reset}> reset </button>
        </div>
    );

    ReactDOM.render(template3, appRoot);
};

render_app();

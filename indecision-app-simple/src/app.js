const Header = () => {
  return (
    <div>
      <h1>Indecision</h1>
      <h2>Put your life in the hands of a computer</h2>
    </div>
  );
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  console.log(props.opts);
  console.log(props.opts.map((x) => 'hello' + x));
  return (
    <div>
      Options component here, there are {props.opts.length} options passed as props.
      <div>
        {
          props.opts.map((x) => <Option
            key={x}
            opt={x}
            handleDeleteOption={props.handleDeleteOption}
          />)
        }
        <button onClick={props.handleDeleteOptions}>Remove All</button>
      </div>
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      <p key={props.opt}>
        Option: {props.opt}
        <button
          onClick={(e) => {
            return props.handleDeleteOption(props.opt)
          }}
        >
          remove
        </button>
      </p>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    //if (error) {
    //  alert('AddOption->handleAddOption: ' + ret);
    //}
    this.setState(() => {
      return { error };
      //    // ^ above is equivalent to:
      //    return {
      //      error
      //    };
      //    // which is also equivalent to:
      //    return {
      //      error: error
      //    };
    });

    // Clear the input text box, after form submit.
    document.getElementsByName('option')[0].value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['1', '2', 'thing 5']
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => ({options: []}));
  }

  handleDeleteOption(optToDel) {
    this.setState((prevState) => ({
      options: prevState.options.filter((x) => x !== optToDel)
    }));
  }

  handlePick() {
    const idx = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[idx];
    alert(pick);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.includes(option)) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option,])
    }));
  }

  render() {
    return (
      <div>
        <Header />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          opts={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

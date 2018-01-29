class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.plus_one = this.plus_one.bind(this);
    this.minus_one = this.minus_one.bind(this);
    this.reset = this.reset.bind(this);

    console.log('loading (saved) count');
    const loaded = parseInt(localStorage.getItem('count'));
    this.state = {
      count: !isNaN(loaded) ? loaded : 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count === this.state.count)
      return;

    console.log('saving new count');
    localStorage.setItem('count', this.state.count);
  }

  plus_one() {
    console.log('plus_one');
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  minus_one() {
    console.log('minus_one');
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }

  reset() {
    console.log('reset');
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  render() {
    return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.plus_one}>+1</button>
          <button onClick={this.minus_one}>-1</button>
          <button onClick={this.reset}>reset</button>
        </div>
    );
  }
}

Counter.defaultProps = {
  initial_count: 0
};

ReactDOM.render(<Counter initial_count={0} />, document.getElementById('app'));

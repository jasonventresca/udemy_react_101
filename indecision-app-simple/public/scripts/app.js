'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Indecision'
    ),
    React.createElement(
      'h2',
      null,
      'Put your life in the hands of a computer'
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      'What should I do?'
    )
  );
};

var Options = function Options(props) {
  console.log(props.opts);
  console.log(props.opts.map(function (x) {
    return 'hello' + x;
  }));
  return React.createElement(
    'div',
    null,
    'Options component here, there are ',
    props.opts.length,
    ' options passed as props.',
    React.createElement(
      'div',
      null,
      props.opts.map(function (x) {
        return React.createElement(Option, {
          key: x,
          opt: x,
          handleDeleteOption: props.handleDeleteOption
        });
      }),
      React.createElement(
        'button',
        { onClick: props.handleDeleteOptions },
        'Remove All'
      )
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      { key: props.opt },
      'Option: ',
      props.opt,
      React.createElement(
        'button',
        {
          onClick: function onClick(e) {
            return props.handleDeleteOption(props.opt);
          }
        },
        'remove'
      )
    )
  );
};

var AddOption = function (_React$Component) {
  _inherits(AddOption, _React$Component);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      error: undefined
    };
    return _this;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      //if (error) {
      //  alert('AddOption->handleAddOption: ' + ret);
      //}
      this.setState(function () {
        return { error: error };
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
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        ),
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var IndecisionApp = function (_React$Component2) {
  _inherits(IndecisionApp, _React$Component2);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this2 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this2.state = {
      options: ['1', '2', 'thing 5']
    };
    _this2.handleDeleteOptions = _this2.handleDeleteOptions.bind(_this2);
    _this2.handleDeleteOption = _this2.handleDeleteOption.bind(_this2);
    _this2.handlePick = _this2.handlePick.bind(_this2);
    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    return _this2;
  }

  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optToDel) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (x) {
            return x !== optToDel;
          })
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var idx = Math.floor(Math.random() * this.state.options.length);
      var pick = this.state.options[idx];
      alert(pick);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.includes(option)) {
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          opts: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

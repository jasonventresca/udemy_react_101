import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
  constructor() {
    this.name = 'Jason';
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
  // For defining class properties this way, don't use `var`, `const`, etc.
  name = 'Alice';
}

const newSyntax = new NewSyntax();
console.log(newSyntax);

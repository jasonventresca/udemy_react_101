import subtract, { square, add } from './utils.js';
import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('app.js is running');
const n = 4;
console.log(`${n} * ${n} = ${square(n)}`);
console.log(`${n} + ${n} = ${add(n)}`);
console.log(`${20} - ${18} = ${subtract(20, 18)}`);

const validateEmail = (text) => {
  const isEmail = validator.isEmail(text);
  console.log(`isEmail(${text}) = ${isEmail}`);
};

validateEmail('test');
validateEmail('jasonventresca@gmail');
validateEmail('jasonventresca@gmail.com');

//const template = React.createElement('p', {}, 'testing 123');
const template = <p>testing 123</p>;
ReactDOM.render(template, document.getElementById('app'));

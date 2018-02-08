// exports:
//    - default export
export default (x, y) => x - y;

console.log('utils.js is running');

const square = (x) => x * x;
const add = (x) => x + x;

//    - named export
export { square, add };

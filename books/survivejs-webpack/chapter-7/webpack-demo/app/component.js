var styles = require('./main.css');

console.log(styles);

module.exports = function () {
  var element = document.createElement('h1');

  element.innerHTML = 'Hello Worlds...';
  element.className = styles.redbutton;
  return element;
};

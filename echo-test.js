require('babel-polyfill');
const echoIt = require('./lib');

setTimeout(() => {
  echoIt.connect({
    name: 'test',
  }).then((echo) => {
    const messages = [
      '100,0\n',
      '110,0\n',
      '120,0\n',
      '105,0\n',
      '95,0\n',
      '85,0\n',
      '90,0\n',
    ];
    let index = 0;
    setInterval(() => {
      echo(messages[index]);
      index++;
      index %= messages.length;
    }, 500);
  });
}, 5000);

const fs = require('fs');

const data = fs.readFileSync('readme.md', 'utf8');

const totalWord = data.split(' ')

const totalWordReact = totalWord.filter((word) => word.toLowerCase() == 'react').length

const allReactWord = data.match(/raact/ig)

console.log("totalWord", allReactWord);

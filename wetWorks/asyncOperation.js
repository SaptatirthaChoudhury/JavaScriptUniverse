const fs = require('fs');

console.log('Start');

try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('Async operation fetched successfully!');
} catch (err) {
  console.error(err);
}

console.log('End');

const fs = require('fs');

console.log('Start');

try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}

console.log('End');

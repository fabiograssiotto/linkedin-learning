const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg); 

console.log(chalk.green('Success!'));

const command = process.argv[2];

if (command == 'add') {
    console.log('Adding note!');
} else if (command == 'remove') {
    console.log('Removing note!');
}
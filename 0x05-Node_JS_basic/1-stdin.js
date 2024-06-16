/**
*A function that prints a string to standard output
*@param {String} msg The string to print
*@author Oyedele Bolaji <https://github.com/Bolaji582>
*/
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});

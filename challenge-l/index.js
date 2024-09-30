
const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

// Calculate the total owed by parsing the balances into numbers
const owed = Math.abs(parseFloat(leoBalance) + parseFloat(sarahBalance))
              .toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
              .replace(/,/g, ' '); // Replace commas with spaces

// Create strings for Leo and Sarah's details, trimming unnecessary whitespace
const leo = `${leoName.trim()} ${leoSurname.trim()} Owed: R${Math.abs(parseFloat(leoBalance)).toLocaleString().replace(/,/g, ' ')}`;
const sarah = `${sarahName.trim()} ${sarahSurname.trim()} Owed: R${Math.abs(parseFloat(sarahBalance)).toLocaleString().replace(/,/g, ' ')}`;


// Create the result string with the total owed
const total = `Total amount owed: R${owed}`;
const result = `${leo}\n${sarah}\n${divider}\n${total}\n${divider}`;


console.log(result);

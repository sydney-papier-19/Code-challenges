const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = '00';
const minuteOfDay = '00';

// Only change below this line

if  (Number(hourOfDay) === 0 && Number(minuteOfDay) === 0) {
	const taxAsDecimal = tax ;
    
    const startingAfterTax = salary - taxAsDecimal;
    console.log(startingAfterTax)
    
	const balance = startingAfterTax - transport - food - rent;
    console.log(balance)
} 


	
console.log('Your balance is: R' + balance.toFixed(2));


const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = '00';
const minuteOfDay = '00';

// Only change below this line


let balance = 0;

if  (Number(hourOfDay) === 0 && Number(minuteOfDay) === 0) {
    //Convert '8%' to a decimal value
	const taxAsDecimal = parseFloat(tax) / 100;
    
    //Calculate the salary after tax
    const startingAfterTax = salary -(salary * taxAsDecimal);
    
    
    //calculate the salary after tax
	 balance = startingAfterTax - transport - food - rent;
   
} 


//calculate the balance
console.log('Your balance is: R' + balance.toFixed(2));


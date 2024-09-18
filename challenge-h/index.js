
const primaryPhone = '0748105141'
const secondaryPhone = '0219131568'

// Only change below this line
//Regular expression used to check for numbers 
 const numberPattern = /^\d+$/;

 //.test(primaryPhone) checks if the phone number strings matches the regex 
const primaryValid = numberPattern.test(primaryPhone) 
const secondaryValid = numberPattern.test(secondaryPhone)

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )

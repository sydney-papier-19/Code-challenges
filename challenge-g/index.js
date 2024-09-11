let FREE_WARNING = 'Free shipping only applies to single customer orders'
let BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
let NONE_SELECTED = '0'

let location = 'RSA';
let shipping= null;
let customers= 1;
let currency= null;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries= 35 * 2;
const pens = 5 * NONE_SELECTED;


if (  location === 'RSA') { 
    shipping = 400 ;
	currency = 'R' ;
} else if (location === NAM) {
shipping = 600 ;
 currency='$';
} else {
    shipping = 800 ;
	 currency='$';
}


const total = shoes + batteries + pens + shirts + toys;
console.log()
const isFreeLocal = currency === 'R' && total > 1000;
const isFreeInt = currency === '$' && total > 60;
const isFree = isFreeLocal || isFreeInt;
const isFreeWarning = isFree && customers !== 1;
const totalWithShipping = total + shipping;
const isBanned = location === 'NK';

if ( isFreeWarning ) {
      console.log(FREE_WARNING);
}

if ( isFree && !isFreeWarning) {
	shipping = 0;
}

// if ( isBanned){
// 	console.log(BANNED_WARNING);
// } else {
// 	console.log( 'price'+currency + totalWithShipping);
// }
console.log(isBanned? BANNED_WARNING : 'price: '+ currency + totalWithShipping);
 
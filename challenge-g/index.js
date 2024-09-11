let FREE_WARNING = 'Free shipping only applies to single customer orders'
let BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
let NONE_SELECTED = '0'

const RSA= 'RSA'
const NAM= 'NAM'
const NK= 'NK'

let location = 'RSA';
let shipping= null;
let customers= 1;
let currency= 'R';

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * 'NONE_SELECTED'
const batteries= 35 * 2
const pens = 5 * 'NONE_SELECTED' 


if (  location === RSA) { 
    shipping === 400 && currency === 'R' 
} else if (location = NAM) {
shipping = 600 && currency==='$'
} else {
    shipping = 800 && currency==='$'
};

if ( shoes + batteries + pens + shirts >= 1000 ) {
	if (location === NAM && customers === 1) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}


if ( shipping === 0 && customers !== 1 ) { console.log(FREE_WARNING) };

location = 'NK' ? console.log(BANNED_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping);

customers = '1'
location = 'RSA'
currency = null

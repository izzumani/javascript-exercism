const ROMANS = {
	M: 1000,
	CM: 900,
	D: 500,
	CD: 400,
	C: 100,
	XC: 90,
	L: 50,
	XL: 40,
	X: 10,
	IX: 9,
	V: 5,
	IV: 4,
	I: 1
}

function toRoman(no) {
	let roman = ''
	for(const [key, value] of Object.entries(ROMANS)) {
    
		roman += key.repeat(no / value)
		no %= value
	}

	return roman
}

export { toRoman }


//console.log ('1'.repeat(0.5))
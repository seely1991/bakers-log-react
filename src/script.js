import ingredients from './ingredients.js';

function conversion(qty, item, inputUnit, outPutUnit) {
	let itemObj;
	if (ingredients[item]) {
		console.log('found it!')
		itemObj = ingredients[item]
	}else{
		itemObj = {
			name: item,
			'1-cup-in-grams': undefined,
			'1-cup-in-ounces': undefined
		}

	}
	let converter = 1;
	switch (inputUnit) {
		case 'cup':
			break;
		case 'floz':
			converter /= 8;
			break;
		case 'tbsp':
			converter /= 16;
			break;
		case 'tsp':
			converter /= 48;
			break;
		case 'grams':
			converter /= itemObj['1-cup-in-grams'];
			break;
		case 'oz':
			converter /= itemObj['1-cup-in-ounces'];
			break;
		default:
			break;
	}

	switch (outPutUnit) {
		case 'cup':
			if (qty * converter !== 1) {outPutUnit += 's'}
			break;
		case 'floz':
			converter *= 8;
			break;
		case 'tbsp':
			converter *= 16;
			break;
		case 'tsp':
			converter *= 48;
			break;
		case 'grams':
			if (!itemObj['1-cup-in-grams']){outPutUnit = inputUnit}else{
				converter *= itemObj['1-cup-in-grams'];
				outPutUnit = 'g';
			}
			break;
		case 'oz':
			if (!itemObj['1-cup-in-ounces']) {outPutUnit = inputUnit}else{
				converter *= itemObj['1-cup-in-ounces'];
			}
			break;
		case 'NA':
			outPutUnit = inputUnit;
			converter = 1;
			break;
		default:
			converter = null;
			break;

	}

	if (qty * converter !== 1 && outPutUnit === 'cup') {outPutUnit += 's'};
	console.log(outPutUnit)
	if (outPutUnit !== 'g' && outPutUnit !== 'oz') {outPutUnit = " " + outPutUnit};
	console.log(qty * converter)
	return Math.round(qty * converter * 10) / 10 + outPutUnit + " " + itemObj.name;
}

export default conversion;
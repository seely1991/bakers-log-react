const ingredients = { 
	'flour': {
		'name': 'flour', 
		'1-cup-in-grams': 145, 
		'1-cup-in-ounces': 5.1 
	},
	'all purpose flour': {
		'name': 'all purpose flour', 
		'1-cup-in-grams': 145, 
		'1-cup-in-ounces': 5.1 
	},
	'bread flour': {
		'name': 'bread flour', 
		'1-cup-in-grams': 157, 
		'1-cup-in-ounces': 5.5 
	},
	'cake flour': {
		'name': 'cake flour', 
		'1-cup-in-grams': 130, 
		'1-cup-in-ounces': 4.6 
	},
	'whole wheat flour': {
		'name': 'whole wheat flour', 
		'1-cup-in-grams': 145, 
		'1-cup-in-ounces': 5.1 
	},
	'cornmeal': {
		'name': 'cornmeal', 
		'1-cup-in-grams': 128, 
		'1-cup-in-ounces': 4.5 
	},
	'conrstarch': {
		'name': 'cornstarch', 
		'1-cup-in-grams': 120, 
		'1-cup-in-ounces': 4.2 
	},
	'butter': {
		'name': 'butter', 
		'1-cup-in-grams': 227, 
		'1-cup-in-ounces': 8 
	},
	'shortening': {
		'name': 'shortening', 
		'1-cup-in-grams': 191, 
		'1-cup-in-ounces': 6.7 
	},
	'vegetable oil': {
		'name': 'vegetable oil', 
		'1-cup-in-grams': 218, 
		'1-cup-in-ounces': 7.7 
	},
	'canola oil': {
		'name': 'canola oil', 
		'1-cup-in-grams': 215, 
		'1-cup-in-ounces': 7.6 
	},
	'safflower oil': {
		'name': 'safflower oil', 
		'1-cup-in-grams': 215, 
		'1-cup-in-ounces': 7.6 
	},
	'heavy cream': {
		'name': 'heavy cream', 
		'1-cup-in-grams': 232, 
		'1-cup-in-ounces': 8.2 
	},
	'sour cream': {
		'name': 'sour cream', 
		'1-cup-in-grams': 242, 
		'1-cup-in-ounces': 8.5 
	},
	'yogurt': {
		'name': 'yogurt', 
		'1-cup-in-grams': 243, 
		'1-cup-in-ounces': 8.6 
	},
	'buttermilk': {
		'name': 'buttermilk', 
		'1-cup-in-grams': 242, 
		'1-cup-in-ounces': 8.5 
	},
	'whole milk': {
		'name': 'whole milk', 
		'1-cup-in-grams': 242, 
		'1-cup-in-ounces': 8.5 
	},
	'half and half': {
		'name': 'half and half', 
		'1-cup-in-grams': 242, 
		'1-cup-in-ounces': 8.5 
	},
	'creme fraiche': {
		'name': 'creme fraiche', 
		'1-cup-in-grams': 232, 
		'1-cup-in-ounces': 8.2 
	},
	'créme fraiche': {
		'name': 'créme fraiche', 
		'1-cup-in-grams': 232, 
		'1-cup-in-ounces': 8.2 
	},
	'mascarpone': {
		'name': 'mascarpone', 
		'1-cup-in-grams': 250, 
		'1-cup-in-ounces': 8.8 
	},
	'water': {
		'name': 'water', 
		'1-cup-in-grams': 236, 
		'1-cup-in-ounces': 8.3 
	},
	'sugar': {
		'name': 'sugar', 
		'1-cup-in-grams': 200, 
		'1-cup-in-ounces': 7.1 
	},
	'dark brown sugar': {
		'name': 'dark brown sugar', 
		'1-cup-in-grams': 239, 
		'1-cup-in-ounces': 8.4 
	},
	'light brown sugar': {
		'name': 'light brown sugar', 
		'1-cup-in-grams': 217, 
		'1-cup-in-ounces': 7.7 
	},
	'brown sugar': {
		'name': 'brown sugar', 
		'1-cup-in-grams': 217, 
		'1-cup-in-ounces': 7.7 
	},
	'powdered sugar': {
		'name': 'pwdered sugar', 
		'1-cup-in-grams': 115, 
		'1-cup-in-ounces': 4.1 
	},
	'honey': {
		'name': 'honey', 
		'1-cup-in-grams': 336, 
		'1-cup-in-ounces': 11.9 
	},
	'molasses': {
		'name': 'molasses', 
		'1-cup-in-grams': 322, 
		'1-cup-in-ounces': 11.4 
	},
	'corn syrup': {
		'name': 'corn syrup', 
		'1-cup-in-grams': 328, 
		'1-cup-in-ounces': 11.6 
	},
	'baking powder': {
		'name': 'baking powder', 
		'1-cup-in-grams': 235.2, 
		'1-cup-in-ounces': 8.3 
	},
	'baking soda': {
		'name': 'baking soda', 
		'1-cup-in-grams': 240, 
		'1-cup-in-ounces': 8.5 
	},
	'yeast': {
		'name': 'instant yeast', 
		'1-cup-in-grams': 153.6, 
		'1-cup-in-ounces': 5.4 
	},
	'instant yeast': {
		'name': 'instant yeast', 
		'1-cup-in-grams': 153.6, 
		'1-cup-in-ounces': 5.4 
	},
	'active dry yeast': {
		'name': 'active dry yeast', 
		'1-cup-in-grams': 148.8, 
		'1-cup-in-ounces': 5.2 
	},
	'salt': {
		'name': 'salt', 
		'1-cup-in-grams': 321.6, 
		'1-cup-in-ounces': 11.3 
	},
	'gelatin': {
		'name': 'gelatin', 
		'1-cup-in-grams': 148.8, 
		'1-cup-in-ounces': 5.2 
	},
	'vanilla extract': {
		'name': 'vanilla extract', 
		'1-cup-in-grams': 192, 
		'1-cup-in-ounces': 6.8 
	},
	'vanilla': {
		'name': 'vanilla extract', 
		'1-cup-in-grams': 192, 
		'1-cup-in-ounces': 6.8 
	},
	'cream of tartar': {
		'name': 'cream of tartar', 
		'1-cup-in-grams': 148.8, 
		'1-cup-in-ounces': 5.2 
	},
	'raisins': {
		'name': 'raisins', 
		'1-cup-in-grams': 144, 
		'1-cup-in-ounces': 5.1 
	},
	'cocoa': {
		'name': 'cocoa', 
		'1-cup-in-grams': 95, 
		'1-cup-in-ounces': 3.4 
	},
	'whole almonds': {
		'name': 'whole almonds', 
		'1-cup-in-grams': 191, 
		'1-cup-in-ounces': 6.7 
	},
	'slivered almonds': {
		'name': 'slivered almonds', 
		'1-cup-in-grams': 120, 
		'1-cup-in-ounces': 4.2 
	},
	'chopped almonds': {
		'name': 'almonds', 
		'1-cup-in-grams': 75, 
		'1-cup-in-ounces': 2.6 
	},
	'almonds': {
		'name': 'whole almonds', 
		'1-cup-in-grams': 191, 
		'1-cup-in-ounces': 6.7 
	},
	'pecans': {
		'name': 'pecans', 
		'1-cup-in-grams': 100, 
		'1-cup-in-ounces': 3.5 
	},
	'walnuts': {
		'name': 'walnuts', 
		'1-cup-in-grams': 114, 
		'1-cup-in-ounces': 4 
	},
	'hazelnuts': {
		'name': 'hazelnuts', 
		'1-cup-in-grams': 142, 
		'1-cup-in-ounces': 5 
	},
	'pistachios': {
		'name': 'pistachios', 
		'1-cup-in-grams': 152, 
		'1-cup-in-ounces': 5.4 
	},
	'almond paste': {
		'name': 'almond paste', 
		'1-cup-in-grams': 284, 
		'1-cup-in-ounces': 10 
	},
	'egg': {
		'name': 'large egg', 
		'1-eqq-in-grams': 50, 
		'1-egg-in-ounces': 1.8 
	},
	'egg yolk': {
		'name': 'large egg yolk', 
		'1-egg-in-grams': 18.6, 
		'1-egg-in-ounces': 0.7 
	},
	'egg white': {
		'name': 'large egg white', 
		'1-egg-in-grams': 30, 
		'1-egg-in-ounces': 1.1 
	} 
}

export default ingredients;
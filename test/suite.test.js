const transistores = require('./test01.js');

	test('transistores(null)', function () {
		var expected = 'Deben estar presentes al menos dos colores';
		var result = transistores(null);
		expect(result).toBe(expected);
	});
	
	test('transistores([])', function () {
		var expected = 'Deben estar presentes al menos dos colores';
		var result = transistores([]);
		expect(result).toBe(expected);
	});

	test('transistores([Negro])', function () {
		var expected = 'Deben estar presentes al menos dos colores';
		var result = transistores(['Negro']);
		expect(result).toBe(expected);
	});

	test('transistores([Marrón])', function () {
		var expected = 'Deben estar presentes al menos dos colores' ;
		var result = transistores(['Marrón']);
		expect(result).toBe(expected);
	});

	test('transistores([Negro, Negro])', function () {
		var expected = 0;
		var result = transistores(['Negro','Negro']);
		expect(result).toBe(expected);
	});

	test('transistores([Negro, Marrón])', function () {
		var expected = 1;
		var result = transistores(['Negro','Marrón']);
		expect(result).toBe(expected);
	});

	test('transistores([Marrón, Marrón])', function () {
		var expected = 11 ;
		var result = transistores(['Marrón','Marrón']);
		expect(result).toBe(expected);
	});


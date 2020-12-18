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

	test('transistores([Marrón, Rojo])', function () {
		var expected = 12 ;
		var result = transistores(['Marrón','Rojo']);
		expect(result).toBe(expected);
	});

	test('transistores([Marrón, Naranja])', function () {
		var expected = 13 ;
		var result = transistores(['Marrón','Naranja']);
		expect(result).toBe(expected);
	});

	test('transistores([Marrón, Amarillo])', function () {
		var expected = 14 ;
		var result = transistores(['Marrón','Amarillo']);
		expect(result).toBe(expected);
	});

	test('transistores([Marrón, Verde])', function () {
		var expected = 15 ;
		var result = transistores(['Marrón','Verde']);
		expect(result).toBe(expected);
	});

	test('transistores([Marrón, Azul])', function () {
		var expected = 16 ;
		var result = transistores(['Marrón','Azul']);
		expect(result).toBe(expected);
	});

	test('transistores([Marrón, Violeta])', function () {
		var expected = 17 ;
		var result = transistores(['Marrón','Violeta']);
		expect(result).toBe(expected);
	});

	test('transistores([Marrón, Blanco])', function () {
		var expected = 19 ;
		var result = transistores(['Marrón','Blanco']);
		expect(result).toBe(expected);
	});

	test('transistores([Marrón, Gris])', function () {
		var expected = 18 ;
		var result = transistores(['Marrón','Gris']);
		expect(result).toBe(expected);
	});

	
	test('transistores([Marrón, Negro, Blanco])', function () {
		var expected = 109 ;
		var result = transistores(['Marrón','Negro','Blanco']);
		expect(result).toBe(expected);
	});

	test('transistores([Rojo, Negro, Blanco])', function () {
		var expected = 209 ;
		var result = transistores(['Rojo','Negro','Blanco']);
		expect(result).toBe(expected);
	});

	test('transistores([Rojo, Negro, Amarillo])', function () {
		var expected = 204 ;
		var result = transistores(['Rojo','Negro','Amarillo']);
		expect(result).toBe(expected);
	});

	test('transistores([Verde, Azul, Violeta])', function () {
		var expected = 567 ;
		var result = transistores(['Verde','Azul','Violeta']);
		expect(result).toBe(expected);
	});

	test('transistores([Verde, Azul, Violeta, Naranja])', function () {
		var expected = 5673 ;
		var result = transistores(['Verde','Azul','Violeta','Naranja']);
		expect(result).toBe(expected);
	});

	test('transistores([Verde, Azul, Violeta, Naranja, Negro])', function () {
		var expected = 56730 ;
		var result = transistores(['Verde','Azul','Violeta','Naranja','Negro']);
		expect(result).toBe(expected);
	});


	test('transistores([Verde, Azul, Violeta, Naranja, Negro, Gris])', function () {
		var expected = 567308 ;
		var result = transistores(['Verde','Azul','Violeta','Naranja','Negro', 'Gris']);
		expect(result).toBe(expected);
	});

	test('transistores([Blanco, Verde, Azul, Violeta, Naranja, Negro, Gris])', function () {
		var expected = 9567308 ;
		var result = transistores(['Blanco','Verde','Azul','Violeta','Naranja','Negro', 'Gris']);
		expect(result).toBe(expected);
	});

	test('transistores([Blanco, Verde, Amarillo, Azul, Violeta, Naranja, Negro, Gris])', function () {
		var expected = 95467308 ;
		var result = transistores(['Blanco','Verde', 'Amarillo','Azul','Violeta','Naranja','Negro', 'Gris']);
		expect(result).toBe(expected);
	});

	test('transistores([Marrón, Blanco, Verde, Amarillo, Azul, Violeta, Naranja, Negro, Gris])', function () {
		var expected = 195467308 ;
	var result = transistores(['Marrón','Blanco','Verde', 'Amarillo','Azul','Violeta','Naranja','Negro', 'Gris']);
		expect(result).toBe(expected);
	});

	test('transistores([Rojo, Marrón, Blanco, Verde, Amarillo, Azul, Violeta, Naranja, Negro, Gris])', function () {
		var expected = 2195467308 ;
	var result = transistores(['Rojo','Marrón','Blanco','Verde', 'Amarillo','Azul','Violeta','Naranja','Negro', 'Gris']);
		expect(result).toBe(expected);
	});
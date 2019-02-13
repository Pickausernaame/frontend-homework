'use strict';

QUnit.module('Тестируем функцию zip', function () {
	QUnit.test('Функция работает с единственным объектом', function (assert) {
		assert.deepEqual(zip({}), {});
		assert.deepEqual(zip({answer: 42}), {answer: 42});
		assert.deepEqual(zip({name: 'Georg'}), {name: 'Georg'});
		const obj = {
			count: 0,
			cost: '120$'
		};
		assert.deepEqual(zip(obj), obj);
	});

	QUnit.test('Функция работает с объектами среди которых есть объекты без свойств', function (assert) {
		assert.deepEqual(zip({}, {}), {});
		assert.deepEqual(zip({answer: 42}, {}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {}, {}, {name: 'Georg'}), {name: 'Georg'});

		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({}, {}, {}, obj, {}, {}), obj);
	});

	QUnit.test('Функция работает с объектами со свойствами с разными именами', function (assert) {
		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({count: 0}, {cost: '120$'}), obj);

		const obj2 = {
			a: 1,
			b: 2,
			c: null,
			d: 4,
			e: 5
		};
		assert.deepEqual(zip({a: 1}, {b: 2}, {c: null}, {d: 4}, {e: 5}), obj2);

		const obj3 = {
			name: 'age',
			value: 42
		};

		const obj4 = {
			prop: false,
			attr: null
		};

		const obj5 = {
			name: 'age',
			value: 42,
			prop: false,
			attr: null
		};

		assert.deepEqual(zip(obj3, obj4), obj5);
	});

	QUnit.test('Функция правильно работает со свойствами, которые встречаются в нескольких объектах', function (assert) {
		assert.deepEqual(zip({answer: 42}, {answer: false}), {answer: 42}, 'Значение должно браться из первого встретившегося поля');
		assert.deepEqual(zip({age: 5}, {}, {age: 4}, {age: 72}), {age: 5});

		const obj = {
			name: 'age',
			value: 42
		};
		assert.deepEqual(zip({name: 'age'}, {value: 42}, {name: 'cost'}, {value: -6}), obj);
	});


	QUnit.test('Функция правильно работает с аналогичными свойствами, но другими значениями', function (assert) {
		assert.deepEqual(zip({answer: 155}, {answer: "EAST IS UP"}), {answer: 155});
		assert.deepEqual(zip({kids: 0}, {kids: -4}, {kids: 22}), {kids: 0});

		const obj = {
			name: 'Anton',
			age: 22
		};

		const obj2 = {
			name: 'Tony',
			age: 202
		};
		assert.deepEqual(zip(obj, obj2), obj);
	});

	QUnit.test('Очень длинный тест, но бестолковый', function (assert) {


		const obj = {
			name: 'Anton',
			age: 22
		};

		const obj2 = {
			name: 'Tony',
			age: 202
		};

		assert.deepEqual(zip(obj, obj2), obj);

		const obj3 = {
			name: 'Peter',
			age: 101
		};

		assert.deepEqual(zip(obj2, obj3), obj2);

		const obj4 = {
			name: 'Fara',
			age: 2020
		};

		assert.deepEqual(zip(obj3, obj4), obj3);

		const obj5 = {
			name: 'Hex',
			age: 20228
		};

		assert.deepEqual(zip(obj4, obj, obj5), obj4);

		const obj6 = {
			name: 'To000ny',
			age: 2042
		};

		assert.deepEqual(zip(obj, obj2, obj5, obj6, obj3), obj);

		const obj7 = {
			name: 'Oleg',
			age: 1
		};

		const obj8 = {
			name: 'Vova',
			age: 228
		};

		const obj9 = {
			name: 'Oxxxy',
			age: 32
		};

		const obj10 = {
			name: 'Scriptonit',
			age: 28
		};

		assert.deepEqual(zip(obj10, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj), obj10);


		const obj11 = {
			name: 'Kendrick',
			age: 30
		};

		assert.deepEqual(zip(obj11, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj), obj11);

		const obj12 = {
			name: 'Tove Lo',
			age: 29
		};

		assert.deepEqual(zip(obj12, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj), obj12);

		const obj13 = {
			name: '',
			age: 202
		};

		assert.deepEqual(zip(obj, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13), obj);
	});

	QUnit.test('Функция работает правильно с пустым набором аргументов', function (assert) {
		assert.deepEqual(zip() , {});
	});

	QUnit.test('Функция работает выводит сообщение об ошибке типов при разном наборе типов аргументов', function (assert) {
		assert.deepEqual(zip('My string') , 'Type error');
		assert.deepEqual(zip(1337) , 'Type error');
	});

});


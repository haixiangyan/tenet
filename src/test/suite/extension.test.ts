import * as assert from "assert";
import {pickAndInsert} from "../../utils/string";

suite('pickAndInsert', () => {
	test('can pick middle char and insert into head', () => {
		const text = 'hello';
		const pickedText = 'e';
		const start = 1;

		const result = pickAndInsert(text, pickedText, start);

		assert.strictEqual(result, 'ehllo');
	});

	test('can pick last char and insert into head', () => {
		const text = 'hello';
		const pickedText = 'o';
		const start = text.length - 1;

		const result = pickAndInsert(text, pickedText, start);

		assert.strictEqual(result, 'ohell');
	});

	test('can pick first char and insert into head', () => {
		const text = 'hello';
		const pickedText = 'h';
		const start = 0;

		const result = pickAndInsert(text, pickedText, start);

		assert.strictEqual(result, 'hello');
	});
});

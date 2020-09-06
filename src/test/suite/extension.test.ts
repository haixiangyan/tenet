import { pickAndInsert } from "../../inputHook";
import * as assert from "assert";

suite('pickAndInsert', () => {
	test('can invert the given text', () => {
		const text = 'hello';
		const pickedText = 'e';
		const start = 1;

		const result = pickAndInsert(text, pickedText, start);

		assert.notStrictEqual(result, 'ehllo');
	});
});

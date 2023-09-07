import json from '../parser.js';

test('json function converts data to string', async () => {
  const data = new Uint16Array([72, 101, 108, 108, 111]);
  const result = await json(data.buffer);
  expect(result).toBe('Hello');
});

import read from '../reader.js';

test('read function simulates reading a file', async () => {
  const result = await read();
  expect(result).toBeDefined();
});

import read from '../../reader';

test('read function simulates reading a file', async () => {
  const result = await read();
  expect(result).toBeDefined();
});

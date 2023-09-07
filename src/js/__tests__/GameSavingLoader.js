import GameSavingLoader from '../GameSavingLoader.js';
import json from '../parser.js';
import read from '../reader.js';

jest.mock('../parser.js');
jest.mock('../reader.js');

describe('GameSavingLoader', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('load method handles errors correctly', async () => {
    json.mockRejectedValue(new Error('Failed to parse JSON'));
    try {
      await GameSavingLoader.load();
    } catch (error) {
      expect(error.message).toBe('Error loading the game saving: Failed to parse JSON');
    }
  });

  test('load method loads and parses data correctly', async () => {
    const mockedData = new Uint16Array([123, 34, 105, 100, 34, 58, 57, 44, 34, 99, 114, 101, 97, 116, 101, 100, 34, 58, 49, 53, 52, 54, 51, 48, 48, 56, 48, 48, 44, 34, 117, 115, 101, 114, 73, 110, 102, 111, 34, 58, 123, 34, 105, 100, 34, 58, 49, 44, 34, 110, 97, 109, 101, 34, 58, 34, 72, 105, 116, 109, 97, 110, 34, 44, 34, 108, 101, 118, 101, 108, 34, 58, 49, 48, 44, 34, 112, 111, 105, 110, 116, 115, 34, 58, 50, 48, 48, 48, 125, 125]);
    const mockedJsonData = JSON.stringify({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });

    json.mockResolvedValue(mockedJsonData);
    read.mockResolvedValue(mockedData);

    const result = await GameSavingLoader.load();

    expect(result).toEqual({
      id: 9,
      created: 1546300800,
      userinfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });
  });
});

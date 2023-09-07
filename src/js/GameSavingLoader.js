import json from './parser.js';
import read from './reader.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const jsonData = await json(data);
      const parsedData = JSON.parse(jsonData);
      const gameSaving = new GameSaving(
        parsedData.id,
        parsedData.created,
        parsedData.userInfo,
      );
      return gameSaving;
    } catch (error) {
      throw new Error(`Error loading the game saving: ${error.message}`);
    }
  }
}

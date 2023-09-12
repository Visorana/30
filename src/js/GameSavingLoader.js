import json from './parser.js';
import read from './reader.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((jsonData) => JSON.parse(jsonData))
      .then((parsedData) => {
        const gameSaving = new GameSaving(
          parsedData.id,
          parsedData.created,
          parsedData.userInfo,
        );
        return gameSaving;
      })
      .catch((error) => {
        throw new Error(`Error loading the game saving: ${error.message}`);
      });
  }
}

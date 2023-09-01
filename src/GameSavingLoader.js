import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const jsonData = await json(data);
      const parsedData = JSON.parse(jsonData);
      const gameSaving = {
        id: parsedData.id,
        created: parsedData.created,
        userinfo: {
          id: parsedData.userInfo.id,
          name: parsedData.userInfo.name,
          level: parsedData.userInfo.level,
          points: parsedData.userInfo.points,
        },
      };
      return gameSaving;
    } catch (error) {
      throw new Error(`Error loading the game saving: ${error.message}`);
    }
  }
}

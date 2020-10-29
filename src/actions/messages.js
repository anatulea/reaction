import { NEW_MESSAGE } from "./types";
import { v4 as uuidv4 } from 'uuid';

export const newMessage = (text) => ({
  type: NEW_MESSAGE,
  item: {
    text,
    timestamp: Date.now(),
    id: uuidv4(),
  },
});

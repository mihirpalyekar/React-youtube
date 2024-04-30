import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/constants";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.unshift(action.payload);
      if (state.message.length > LIVE_CHAT_COUNT) {
        state.message.length = LIVE_CHAT_COUNT;
      }
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
    messages: string[];
}

const initialState: AppState = {
    messages: [],
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setMessages: (state, action: PayloadAction<string[]>) => {
            state.messages = action.payload;
        },
        addMessage: (state, action: PayloadAction<string>) => {
            state.messages.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { setMessages, addMessage } = appSlice.actions;

export default appSlice.reducer;

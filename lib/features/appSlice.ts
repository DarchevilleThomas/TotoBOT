import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
    messages: string[];
    isRequesting: boolean,
    error: string|null,
}

const initialState: AppState = {
    messages: [],
    isRequesting: false,
    error: null,
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
        setIsRequesting: (state, action: PayloadAction<boolean>) => {
            state.isRequesting = action.payload;
        },
        setError: (state, action: PayloadAction<string|null>) => {
            state.error = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setMessages,
    addMessage,
    setIsRequesting,
    setError,
} = appSlice.actions;

export default appSlice.reducer;

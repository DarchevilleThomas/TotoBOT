import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
    messages: string[];
    isRequesting: boolean,
    error: string|null,
    gemini: {
        apiKey: string|null,
    },
    modals: {
        setting: boolean,
    },
}

const initialState: AppState = {
    messages: [],
    isRequesting: false,
    error: null,
    gemini: {
        apiKey: null,
    },
    modals: {
        setting: false,
    },
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
        setGeminiApiKey: (state, action: PayloadAction<string|null>) => {
            state.gemini.apiKey = action.payload;
        },
        setSettingModal: (state, action: PayloadAction<boolean>) => {
            state.modals.setting = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setMessages,
    addMessage,
    setIsRequesting,
    setError,
    setGeminiApiKey,
    setSettingModal,
} = appSlice.actions;

export default appSlice.reducer;

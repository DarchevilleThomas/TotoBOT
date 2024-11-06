import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "@/lib/features/appSlice";
import { GeminiAPI } from "@/lib/api/GeminiAPI";

export const makeStore = () => {
    return configureStore({
        reducer: {
            app: appSlice.reducer,

            [GeminiAPI.reducerPath]: GeminiAPI.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(GeminiAPI.middleware),
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

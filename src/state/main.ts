import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/counterSlice';
import authReducer from './Slices/AuthState';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

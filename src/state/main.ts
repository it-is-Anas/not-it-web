import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/counterSlice';
import authReducer from './Slices/AuthState';
import productsReducer from './Slices/productState';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        products: productsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

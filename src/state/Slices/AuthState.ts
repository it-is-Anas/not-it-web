import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    firstName: string,
    lastName: string,
    email: string,
    password: string
    token: string
};

const initialState: AuthState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    token: '',
};

export const counterSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setData: (state, action)=>{
            state.token = action.payload.token;
            state.firstName = action.payload.user.firstName;
            state.lastName = action.payload.user.lastName;
            state.email = action.payload.user.email;
            state.password = action.payload.user.password;
            localStorage.setItem('token',action.payload.token);
        }
    },
});

export const { setData } = counterSlice.actions;

export default counterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';


interface ProductsState {
    products: {title:string , content: string , date: string}[],
};

const initialState: ProductsState = {
    products:[],
};

export const counterSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        putNotes(state,action){
            state.products = [...action.payload,...state.products];
        }
    },
});

export const { putNotes } = counterSlice.actions; 
export default counterSlice.reducer;

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
        },
        updateNote(state,action){
            const updatedNote = action.payload[0];
            for(let i = 0 ; i < state.products.length ; ++i){
                if(state.products[i]['id'] === action.payload[0]['id']){
                    state.products[i].title = action.payload[0].title; 
                    state.products[i].content = action.payload[0].content; 
                }
            }
        },
    },
});

export const { putNotes , updateNote } = counterSlice.actions; 
export default counterSlice.reducer;

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
            for(let i = 0 ; i < state.products.length ; ++i){
                if(state.products[i]['id'] === action.payload[0]['id']){
                    state.products[i].title = action.payload[0].title; 
                    state.products[i].content = action.payload[0].content; 
                }
            }
        },removeNote(state,action){
            state.products = state.products.filter((ele)=>{
                return ele['id'] !== action.payload;
            });
        }
    },
});

export const { putNotes , updateNote ,removeNote  } = counterSlice.actions; 
export default counterSlice.reducer;

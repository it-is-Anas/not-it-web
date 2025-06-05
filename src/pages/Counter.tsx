import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/main';
import { increment, decrement, reset, incrementByAmount } from '../state/Slices/counterSlice';

export default function Counter() {
const count = useSelector((state: RootState) => state.counter.value);
const dispatch = useDispatch();

return (
    <div className="p-4">
    <h1 className="text-xl font-bold mb-4">Count: {count}</h1>
    <button onClick={() => dispatch(increment())} className="btn">+</button>
    <button onClick={() => dispatch(decrement())} className="btn">-</button>
    <button onClick={() => dispatch(reset())} className="btn">Reset</button>
    <button onClick={() => dispatch(incrementByAmount(5))} className="btn">+5</button>
    </div>
);
}

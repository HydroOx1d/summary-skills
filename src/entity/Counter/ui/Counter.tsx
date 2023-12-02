import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

const Counter = () => {
	const value = useSelector(getCounterValue);
	const dispatch = useDispatch();

	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div data-testid="counter">
			<h1 data-testid="value">{value}</h1>
			<button data-testid="increment-btn" onClick={increment}>
        Increment
			</button>
			<button data-testid="decrement-btn" onClick={decrement}>
        decerement
			</button>
		</div>
	);
};

export default Counter;
/**
 * Main App component
 */
import React from "react";
import {getStoreManager} from './global-store';

const counterStore = getStoreManager().getGlobalStore().counter;

const Counter = () => {
    const [counter, setCounter] = React.useState(0)
    React.useEffect(() => {
        // Subscribe to global state changes
        counterStore.subscribe((counterState) => {
            setCounter(counterState.counter);
        });
    })
    const increment = () => {
        // Set global state
        counterStore.setCounter(counter + 1)
    }
    const decrement = () => {
        // Set global state
        counterStore.setCounter(counter - 1)
    }
    return (
        <>
        <div style={{ textAlign: "center" }}>
            <h5>Counter Component</h5>
            Counter: {counter}
            <button onClick={() => {increment()}}>Increment</button>
            <button onClick={() => {decrement()}}>Decrement</button>
        </div>
        </>
    );
};

export default Counter;

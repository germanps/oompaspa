import { useState } from "react";

export const useCounter = (initialState = 1) => {
    const [state, setstate] = useState(initialState);

    const increment = (factor = 1) => {
        //avoid 5
        if (state === 4) {
            setstate(1)
        } else {
            setstate(state + factor);
        }
    };

    const decrement = (factor = 1) => {
        //avoid 0
        if (state === 1) {
            setstate(1)
        } else {
            setstate(state - factor);
        }
    };

    const reset = () => {
        setstate(initialState);
    };

    return {
        state,
        increment,
        decrement,
        reset,
    };
};

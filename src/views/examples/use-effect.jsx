import { useState } from "react";
import { useEffect } from "react";

function calc(number) {
    if (number < 0)
        return -1;

    if (number === 0)
        return 1;

    return calc(number - 1) * number;
}

const UseEffect = () => {
    const [number, setNumber] = useState(1);
    const [count, setCount] = useState(1);

    useEffect(function () {
        setCount(calc(number));
    }, [number]);

    return (
        <div className="UseEffect">
            <h1>UseEffect</h1>
            <div className="center">
                <div>
                    <span>Count: </span>
                    <span>{count}</span>
                </div>
                <input type="number" value={number}
                    onChange={(e) => setNumber(e.target.value)} />
            </div>
        </div>
    );
};

export default UseEffect;

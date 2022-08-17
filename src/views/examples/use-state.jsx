import { useState } from "react";

const UseState = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="UseState">
            <h1>Use state</h1>
            <div className="center">
                <span className="text">{count}</span>
                <button onClick={() => setCount(count + 1)}>Count</button>
                <button onClick={() => setCount(count - 1)}>Uncount</button>
            </div>
        </div>
    );
};

export default UseState;

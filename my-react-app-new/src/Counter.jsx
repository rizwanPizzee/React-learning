import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    const increment = ()=>{
        setCount(count + 1);
    };
    const decrement = ()=>{
        if(count <= 0){
            setCount(0);
        }
        else{
            setCount(count - 1);
        }
    };

    const reset = ()=>{
        setCount(0);
    };

    return(
        <div className="counter-outter-body">
            <div className="counter-body">
                <p className="counter-display">{count}</p>
                <hr />
                <button className="counter-btn" onClick={decrement}>Decrement</button>
                <button className="counter-btn" onClick={reset}>Reset</button>
                <button className="counter-btn" onClick={increment}>Increment</button>
            </div>
        </div>
    );
}

export default Counter;
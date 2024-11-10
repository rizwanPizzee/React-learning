import React, {useState} from 'react';

function UpdaterFunction(){
    const [count, setCount] = useState(0);
    const increment = ()=>{
        /*
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);

        we should have to write the 
        below code instead of the 
        above code, because the above 
        code will increment 'count' 
        once while it would be 3(acc. to us)
        thats why we use updater function
        */
        setCount(c => c + 1); //OR setCount(prevCount => prevCount + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    };

    const decrement = ()=>{
        if(count <= 0){
            setCount(0);
        }
        else{
            setCount(c => c - 1);
            setCount(c => c - 1);
            setCount(c => c - 1);
        }
    };

    const reset = ()=>{
        setCount(0);
    };

    return( <div className="counter-body">
                <p >{count}</p>
                <hr />
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
            </div>
    );
}

export default UpdaterFunction;
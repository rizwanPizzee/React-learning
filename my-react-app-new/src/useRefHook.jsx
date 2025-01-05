import Reac, {useRef, useEffect} from 'react';

function RefComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(()=>{
        console.log("Component Rendered");
    });

    function clickHandle(inputRefOne, inputRefTwo, inputRefThree){
        inputRefOne.current.focus();
        inputRefOne.current.style.backgroundColor = 'yellow';
        inputRefTwo.current.style.backgroundColor = '';
        inputRefThree.current.style.backgroundColor = '';
    } 

    return(
        <div>
            <button onClick={() => clickHandle(inputRef1, inputRef2, inputRef3)}>Click Me1</button>
            <input ref={inputRef1}/>
            <hr />

            <button onClick={() => clickHandle(inputRef2, inputRef1, inputRef3)}>Click Me2</button>
            <input ref={inputRef2}/>
            <hr />

            <button onClick={() => clickHandle(inputRef3, inputRef1, inputRef2)}>Click Me3</button>
            <input ref={inputRef3}/>
        </div>
    );
}

export default RefComponent;
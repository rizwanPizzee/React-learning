import React, {useState, useEffect} from 'react';

function MyComp(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const [width, setWidth] = useState(window.innerWidth); 
    const [height, setHeight] = useState(window.innerHeight); 

    useEffect(()=>{
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);     // if i remove the color from dependency, 
                            // whenever i tap on 'color change' btn , 
                            // it will not change the title .

    function addCount(){
        setCount(c => c + 1);
    }

    function subCount(){
        setCount(c => c === 0 ? 0 : (c - 1));
    }

    function changeColor(){
        setColor(c => c === "green" ? "red": "green");
    }

    useEffect(()=>{
        window.addEventListener("resize", handleSize);
        console.log("EventLis added")
    }, []);     //here we not added width and height to 
                //dependency because, when one of it cahnges 
                //it will call event listner and log(msg), empty 
                //dependency only one time mount the component to DOM.
    
    useEffect(()=>{
        document.title = `Size: ${width} x ${height}`;
    }, [height, width]);            

    function handleSize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
            <div>
                <p style={{color: color}}>Count: {count}</p>
                <button onClick={addCount}>Add</button>
                <button onClick={subCount}>Subtract</button>
                <br />
                <button onClick={changeColor}>Change Color</button>
            </div>
            <hr />
            <div>
                <h3>Width & Height of Window</h3>
                <p onChange={handleSize}>Width: {width}</p>
                <p onChange={handleSize}>Height: {height}</p>
            </div>

        </>
    );
}

export default MyComp;
import React, {useState} from 'react';

function ColorPickerComponent(){

    const [color, setColor] = useState("#000000");

    function handleColorChange(event){
        setColor(event.target.value);
    };

    return(
        <div className='color-picker-container'>
            <div className='color-picker-inner-container'>
                <h1>Color Picker App</h1>
                <hr />
                <div className='display-color' style={{backgroundColor: color}}>
                    <p>Selected Color: {color}</p>
                </div> 
                <hr />
                <label>Select Color</label>
                <input className="input-color" type="color" onChange={handleColorChange}/>
            </div>
        </div>
    );
}

export default ColorPickerComponent;
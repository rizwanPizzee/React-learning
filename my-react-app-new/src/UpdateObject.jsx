import React, {useState} from 'react';
function UpdateObjectComponent(){
    const [car, setCar] = useState({year: 2016,
                                    make: "Suzuki",
                                    model: "Mehran"});
    
    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
        // setCar({...car, year: event.target.value});
        
    }  
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
        // setCar({...car, make: event.target.value});
    } 
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
        // setCar({...car, model: event.target.value});
    }   
                                    
    return(<div>
            <p>Your Favourite Car: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange} placeholder='2016'/>
            <br />
            <br />
            <input type="text" value={car.make}  onChange={handleMakeChange} placeholder="Suzuki"/>
            <br />
            <br />
            <input type="text" value={car.model} onChange={handleModelChange} placeholder="Mehran"/>
            </div>
    );
}

export default UpdateObjectComponent;
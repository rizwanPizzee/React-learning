import React, {useState} from 'react';

function UpdateArrayObject(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCars = {
                            year: carYear,
                            make: carMake,
                            model: carModel
                        };

        setCars(c => [...c, newCars]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCars(cars.filter((element, i) => i !== index));
    }

    function handelCarYear(event){
        setCarYear(event.target.value);
    }

    function handelCarMake(event){
        setCarMake(event.target.value);
    }

    function handelCarModel(event){
        setCarModel(event.target.value);
    }

    function handleKeyDown(event){
        if(event.key === 'Enter'){
            handleAddCar();
        }
    }

    return(

        <div>
            <h1>Car App</h1>
            <ul>
                {cars.map((car, index) => 
                <li key={index} onClick={()=>handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handelCarYear} placeholder='Enter Car Year' />
            <br />
            <input type="text" value={carMake} onChange={handelCarMake} onKeyDown={handleKeyDown} placeholder='Enter Car Make'/>
            <br />
            <input type="text" value={carModel} onChange={handelCarModel} onKeyDown={handleKeyDown} placeholder='Enter Car Model'/>
            <br />
            <br />
            <button onClick={handleAddCar} >Add Car</button>
        </div>
    );
}

export default UpdateArrayObject;
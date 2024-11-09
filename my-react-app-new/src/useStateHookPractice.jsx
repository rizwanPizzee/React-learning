import React, {useState} from 'react';
function MyComponent(){

    const [name, setName] = useState("Ali");
    const updateName = ()=>{
        setName("Ahmed");
    };

    const [age, setAge] =useState(0);
    const incrementAge = ()=>{
        setAge(age+1);
    };
    

    const [isStudent, setIsStudent] = useState(false);
    const updateIsStudent = () =>{
        setIsStudent(!isStudent);
    };

    const resetEverything = ()=>{
        setName("Ali");
        setAge(0);
        setIsStudent(false);
    };

    return(<div>
        <p>Name : {name}</p>
        <button onClick={updateName}>Update Name</button>

        <p>Age : {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
       

        <p>Age : {isStudent ? "Yes" :"No"}</p>
        <button onClick={updateIsStudent}>Update Status</button>

        <button onClick={resetEverything}>Reset</button>
    </div>);
}


export default MyComponent;
import React, {useState} from 'react';
import ComponentB from './ComponentB.jsx';

function ComponentA(){
    const [user, setUser] = useState("Pizzee");
    return(
        <div className='cont-comp'>
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <ComponentB user={user}/>
        </div>  
    );
}

export default ComponentA;
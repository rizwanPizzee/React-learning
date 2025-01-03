import React, {useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA(){
    const [user, setUser] = useState("Pizzee");
    return(
        <div className='cont-comp'>
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>

            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>
        </div>  
    );
}

export default ComponentA;
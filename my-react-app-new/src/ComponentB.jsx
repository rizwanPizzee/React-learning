import ComponentC from './ComponentC.jsx';

function ComponentB(props){

    return(
        <div className='cont-comp'>
            <h1>Component B</h1>
            <ComponentC user = {props.user}/>
        </div>
    );
}

export default ComponentB;
import ComponentD from './ComponentD.jsx';

function ComponentC(props){

    return(
        <div className='cont-comp'>
            <h1>Component C</h1>
            <ComponentD user = {props.user}/>
        </div>
    );
}

export default ComponentC;
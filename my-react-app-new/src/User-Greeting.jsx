import PropTypes from 'prop-types';

//method 3 of conditional rendering
function Greeting(props){
    const welcomeMsg = <h2 className="welcome-msg">Welcome {props.userName}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please Log-in to continue</h2>;
    return (
            props.isLogedin ? welcomeMsg : loginPrompt
    );

/*method 2 of conditional rendering
    return (
        props.isLogedin ?
        <h2 className="welcome-msg">Welcome {props.userName}</h2>:
        <h2 className="login-prompt">Please Log-in to continue</h2>
    );
    */
/* method 1 of conditional rendering
    if(props.isLogedin){
        return <h2 className="welcome-msg">Welcome {props.userName}</h2>;
    }else{
        return <h2 className="login-prompt">Please Log-in to continue</h2>;
    }
   */
}

Greeting.propTypes = {
    isLogedin : PropTypes.bool,
    userName : PropTypes.string
};
Greeting.defaultProps = {
    isLogedin : true,
    userName :"Guest"
} 
export default Greeting;
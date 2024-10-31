import Card from './Card.jsx';
import Student from './Student.jsx';
function App() {
  return(
    <>
      <Student name="Ali" age={14} isStudent={true}/>
      <Student name="Ahmed" age={20} isStudent={false}/>
      <Student name="Raza" age={25} isStudent={true}/>
    </>
  );
}

export default App

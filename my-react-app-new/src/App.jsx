

import Greeting from './User-Greeting.jsx';
function App() {
  return(
    <>
      <Greeting isLogedin={true} userName="Ali"/>
      <Greeting />
    </>
  );
}

export default App
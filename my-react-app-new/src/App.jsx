import List from './List.jsx';

function App() {
  const fruits = [{id: 1, name: "Apple", calories: 95},
                  {id: 2, name: "Pineapple", calories: 37},
                  {id: 3, name: "Banana", calories: 105},
                  {id: 4, name: "Orange", calories: 45},
                  {id: 5, name: "Coconut", calories:159}];

  const vegetables = [{id: 1, name: "Tomato", calories: 126},
                    {id: 2, name: "Potato", calories: 75},
                    {id: 3, name: "Spinch", calories: 201},
                    {id: 4, name: "Carrot", calories: 162},
                    {id: 5, name: "Onion", calories: 54}];
                  
  return(
    <>
    {fruits.length > 0 ? <List items = {fruits} category = "Fruits"/>: null}
    {vegetables.length > 0 ? <List items = {vegetables} category = "Vegetables"/> : null}
  
  {/*
    {fruits.length > 0 && <List items = {fruits} category = "Fruits"/>}
    {vegetables.length > 0 && <List items = {vegetables} category = "Vegetables"/> }
  */}
    </>
  );
}

export default App
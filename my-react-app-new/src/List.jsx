
function List(){
    const fruits = [{id: 1, name: "Apple", calories: 95},
                    {id: 2, name: "Pineapple", calories: 37},
                    {id: 3, name: "Banana", calories: 105},
                    {id: 4, name: "Orange", calories: 45},
                    {id: 5, name: "Coconut", calories:159}];

    // using of filter method
    //const lowCalfruits = fruits.filter(values => values.calories < 100);
    const highCalfruits = fruits.filter(values => values.calories > 100);
    const fruit = highCalfruits.map((value) =>
                <li key={value.id}>{value.name}: &nbsp; <b>{value.calories}</b></li>);

    return( <ol>{fruit}</ol>);

/*  //Sorting
    //fruits.sort((a,b)=> a.name.localeCompare(b.name)); //Alphabetical Ascending
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)); //Alphabetical Descending
    //fruits.sort((a,b)=> a.calories - b.calories); //Ascending Sort by num.
    //fruits.sort((a,b)=> b.calories - a.calories);  //Descending Sort by num.

    const fruit = fruits.map((value) =>
                <li key={value.id}>{value.name}: &nbsp; <b>{value.calories}</b></li>);

    return( <ol>{fruit}</ol>);

*/

/*  //simple list returning 
    const fruits = ["Apple","Pineapple", "Banana", "Orange"];
    fruits.sort();
    const fruit = fruits.map((value) =><li>{value}</li>);
    return( <ol>{fruit}</ol>);
*/

}

export default List;
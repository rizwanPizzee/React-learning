import React, {useState} from 'react';

function UpdateArrayComponent(){

    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFood(){
        const newFood = document.getElementById("food-input").value;
        document.getElementById("food-input").value = "";  
        setFoods(f => ([...f, newFood]));
    };

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index))
    }

    return(
            <div>
                <h1>Food Index</h1>
                <ul>
                    {foods.map((food, index)=>
                    <li style={{cursor: 'pointer'}} key={index} onClick={()=>(handleRemoveFood(index))}>
                        {food}
                    </li>)}
                </ul>
                <input type="text" id="food-input" placeholder='Enter The Food' />
                <button onClick={handleAddFood}>Add</button>
            </div>
    );
}

export default UpdateArrayComponent;
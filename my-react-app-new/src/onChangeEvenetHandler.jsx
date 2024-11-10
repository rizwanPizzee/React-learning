import React, {useState} from 'react';
function MyComponent(){

    const [name, setname] = useState("");
    const [quantity, setQuantity] = useState(1); 
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [delivery, setDelivery] = useState("");

    function handleNameChange(event){
        setname(event.target.value);
    };

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    };

    function handlePaymentChange(event){
        setPayment(event.target.value);
    };

    function handleDeliveryChange(event){
        setDelivery(event.target.value);
    };

    const reset = (event)=>{
        setname("");
        setQuantity(1);
        setComment("");
        setPayment("");
        setDelivery("");
    };

    return(
        <div style={{textAlign: 'center'}}>
            <input value={name} onChange={handleNameChange} placeholder='Write your name' />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="More about your delivery place"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select Option</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option>
                <option value="Pay Pal">Pay Pal</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value = "Pick Up"  checked={delivery === "Pick Up"} onChange={handleDeliveryChange}/>
                Pick Up
            </label>

            <label>
                <input type="radio" value = "Home Delivery"  checked={delivery === "Home Delivery"} onChange={handleDeliveryChange}/>
                Home Delivery
            </label>
            <p>Delivery Option: {delivery}</p>


            <button onClick={reset}>Reset</button>
        </div>
    );
}
export default MyComponent;
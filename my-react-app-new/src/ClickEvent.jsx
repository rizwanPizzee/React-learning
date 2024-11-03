
function ClickEvent(){
  //1. function calling with no parameter
    const clickHandle = () => console.log('Clicked');
    return(<button onClick={clickHandle}>Click</button>);
    

    /*
    //2. function calling with 1 parameter
    const clickHandle = (name) => console.log(`${name} clicked me`);
    return(<button onClick={()=>clickHandle('Ali')}>Click</button>);
    */

     /* 
    //3. Condional coding
    let count = 0;
    const handleCount = (name)=>{
        if(count < 3){
            count++;
            console.log(`${name} clicked me ${count} time/s`);
        }else{
            console.log(`${name}, you clicked me more than ${count} times`);
        }
    };
    return(<button onClick={() => handleCount('Ali')}>Click</button>);
    */

    /* 
    //4. changing inner content using event(e) object
    const eventMethod =(e) => e.target.textContent = 'Clicked';
    return(<button onClick={(e) => eventMethod(e)}>Click</button>);
    */

    /*
    //5. working with <img></img>
   const imgURl = './src/assets/mail.png';
   const clickToRemove = (e)=> e.target.style.display = 'none';
   return(<img onClick={clickToRemove} src={imgURl}></img>);
   */
}

export default ClickEvent;
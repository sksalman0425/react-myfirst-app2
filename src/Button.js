import { useState } from "react";


function Button(props){
    console.log("props recieved",props);
    // const arr=[2,4,5,6];
    // const [a,b,c,d]=arr;//this is array destructuring
    //similiarlly useState return array which has state object at '0' and setter function at "1" position
    //these state obj and setter function we have taken into counter obj and setCounter Function. 
    // here we use array destructuring concept
    const [counter,setCounter]=useState(props.counter);
    const [name,setName]=useState("Azhar")
    // function handleOnClick(){
    //     setCounter(counter+1);
    //     console.log("button click");
    // }; 
    const handleOnClick=()=>{
        setCounter(counter+props.counter);
        if (counter%2===0) {
            setName("Taimur"); 
        }else{
            setName("Azhar"); 
        }
       
        console.log("counter value after button click",counter,name);
    };
    //here in JSX onClick={functionRef}. remember we are not calling function()
    return(
        <div>
           <p>{name}</p> 
        <button onClick={handleOnClick}>Test {counter}</button>
        </div>
    )
}
export default Button;
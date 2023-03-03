// import { useState } from 'react';
// import './App.css';
// import Button from './Button';




// function App() {

//   return (
//     <div className="App">
//       <h1>Getting started</h1>
//       <p> Welcome to my React first App</p>
//       <Button counter={1}>  </Button>
//       <Button counter={3}> </Button>
//       <Button counter={5}> </Button>


//   );
// }

import { useState } from 'react';
import offImage from './images/off.webp';
import onImage from './images/on.webp';

// generally we kept images in the public folder.
// if you are keeping images in src folder then you have to import it.
function App(){
  const [imageUrl,setImageUrl]=useState(onImage);

  const handleOnClick=()=>{
    setImageUrl(onImage);
  }
  const handleOffClick=()=>{
    setImageUrl(offImage);
  }

  return(
    <>
    <h2> What can javascript do? </h2>
    <p> JavaScript can Change HTML Attribute value</p>
    <p> In this case javascript changes the value of the src (source) Attribute of an image. </p>
    
    
    <button onClick={handleOnClick}>ON</button>
    <img src={imageUrl} height="200" width="200" alt={"bulb_image"}/>
    <button onClick={handleOffClick}>OFF</button>
    
    
    </>


  )
}

export default App;

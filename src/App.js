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

// import { useState } from "react";
// import Avatar from "./Avatar";
// import offImage from "./images/off.webp";
// import onImage from "./images/on.webp";

// generally we kept images in the public folder.
// if you are keeping images in src folder then you have to import it.
// function App(){
//   const [imageUrl,setImageUrl]=useState(onImage);

//   const handleOnClick=()=>{
//     setImageUrl(onImage);
//   }
//   const handleOffClick=()=>{
//     setImageUrl(offImage);
//   }

//   return(
//     <>
//     <h2> What can javascript do? </h2>
//     <p> JavaScript can Change HTML Attribute value</p>
//     <p> In this case javascript changes the value of the src (source) Attribute of an image. </p>

//     <button onClick={handleOnClick}>ON</button>
//     <img src={imageUrl} height="200" width="200" alt={"bulb_image"}/>
//     <button onClick={handleOffClick}>OFF</button>

//     </>

//   )
// }

// import "./App.css";
// import Profile from "./Profile";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Amazing scientist</h1>
//         <Profile />
//         <Profile />
//         <Profile />
//       </header>
//     </div>
//   );
// }

// export default App;

import AvatarProfile from "./AvatarProfile";
import './App.css';
import { useEffect, useState } from "react";
function App() {
  const [changeSize,SetChangeSize]=useState(50);
  useEffect(()=>{
    setTimeout(()=>{
      SetChangeSize(300)
    },7000)
  },[]);
  //props are immutable but we can change state of parent component after 7 second which is given to props,
  //so in that way props value can change and your component will re-render automatically.
  return (
    <div className="App">
    <header className="App-header">
      <h1>Amazing scientists</h1>
      <AvatarProfile
        size={changeSize}//here props value through parent state is changing after 7 second.
        person={{ name: "xyz", imageId: "1bX5QH6" }}
      />
      <AvatarProfile
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <AvatarProfile
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />

  </header>
    </div>
  );
}

export default App;

import './App.css';
import Button from './Button';




function App() {
  return (
    <div className="App">
      <h1>Getting started</h1>
      <p> Welcome to my React first App</p>
      <Button counter={1}>  </Button>
      <Button counter={3}> </Button>
      <Button counter={5}> </Button>
    </div>
  );
}

export default App;

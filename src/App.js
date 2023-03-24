import './App.css';
import { Button } from "antd";


function App() {
  const onClick = () => {
    alert('Button Click works');
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={onClick} >Test</Button>
      </header>
    </div>
  );
}

export default App;

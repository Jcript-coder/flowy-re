import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/NavigationBar";

import LeftCard from "./components/Body";
import MyCanvas from "./components/MyCanvas";
import PopWrap from "./components/PopWrap"
function App() {
  return (
    <div className="App">
          <NavigationBar />
          <LeftCard />
          <PopWrap />
          <MyCanvas />
    </div>
   
    
  );
}

export default App;

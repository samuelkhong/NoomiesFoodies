import logo from './logo.svg';
import './App.css';
import TopMenu from './components/TopMenu/TopMenu';
import SideMenu from  './components/SideMenu/SideMenu';
import Button from './components/ListPage/buttons/button';
import SideBtn from './components/SideMenu/SideButton/SideButton';


function App() {
  

  return (
    <div className="App"> 
      
      <Button imageUrl={"./images/list-images/Vectorcheck.png"} onButtonClick={()=>null} buttonName={"Done"}/>
      
    </div>
  );
}

export default App;

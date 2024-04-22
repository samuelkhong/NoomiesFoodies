import logo from './logo.svg';
import './App.css';
import TopMenu from './components/TopMenu/TopMenu';
import SideMenu from  './components/SideMenu/SideMenu';
import Button from './components/ListPage/buttons/button';
import SideBtn from './components/SideMenu/SideButton/SideButton';
import ListPage from './components/ListPage/ListPage';
import Dashboard from './components/DashBoard/Dashboard'

function App() {
  

  return (
    <div className="App"> 
      
      <ListPage />
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import TopMenu from './components/TopMenu/TopMenu';
import SideMenu from './components/SideMenu/SideMenu';
import Button from './components/ListPage/buttons/button';
import SideBtn from './components/SideMenu/SideButton/SideButton';
import ListPage from './components/ListPage/ListPage';
import LoginPage from './components/LoginPage/LoginPage'
import Dashboard from './components/DashBoard/Dashboard.js'
import { useSelector } from 'react-redux';


function App() {

  const user = useSelector(state => state.auth.user)

  return (
    <div className="App">

      {user ? <Dashboard /> : <LoginPage />}

    </div>
  );
}

export default App;

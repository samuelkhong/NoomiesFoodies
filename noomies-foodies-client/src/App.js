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
import { useGetRecipesQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from './features/recipesApiSlice.js';
import RegistrationPage from './components/Registration/Registration.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  // const { data: recipes } = useGetRecipesQuery();

  // const [addRecipe] = useAddRecipeMutation()
  // const [updateRecipe] = useUpdateRecipeMutation()
  // const [deleteRecipe] = useDeleteRecipeMutation()


  const user = useSelector(state => state.auth.user)


  return (
    <div className="App">
      <Router>
      <Routes>
        {/* Top-level routes should use the `element` prop directly inside `Routes` */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
      


    </div>
  );
}

export default App;

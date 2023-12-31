import { Routes,Route} from 'react-router-dom';
import './App.css';
import Admin_training from './admin_component/create_training';
import Login from './login_component/login';
import Signup from './login_component/register';
import Users from './user_component/Users';
import UserForm from './user_component/UserForm';
// import View_training from './view_trainings';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/admin_training' element={ <Admin_training/>}/>
      <Route path='/' element={ <Login/>}/>
      <Route path='/signup' element={ <Signup/>}/>
      <Route path='/userform' element={ <UserForm/>}/>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import PrivateRoute from './utils/PrivateRoute';
import AddUserPage from './pages/AddUserPage';
import UpdateUserPage from './pages/UpdateUserPage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path='/' exact element={<PrivateRoute/>}>
            <Route exact path='/' element={<HomePage />} />
          </Route>
          <Route Component={LoginPage} path='/login'/>
          <Route Component={SignupPage} path='/signup'/>
          <Route Component={AddUserPage} path='/add-user'/>
          <Route Component={UpdateUserPage} path='/update-user/:user_id'/>
          <Route Component={UserProfilePage} path='/user-profile'/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;

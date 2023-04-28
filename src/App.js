import { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./scenes/Home.jsx";
import AddShow from "./scenes/Addshow.jsx";
import Login from "./scenes/Login.jsx";
import SignUp from "./scenes/Signup.jsx";
import "./styles/index.css";
import './styles/App.css';

function App() {
  const [shows, setShows] = useState();
  const [user, setUser] = useState();

  return (
    <>    
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={ <Home shows={shows} setShows={setShows} /> } />
        <Route path="/addshow" element={ <AddShow setShows={setShows} />} />
        <Route path="/signup"  element={ <SignUp  setUser={setUser} /> } />
        <Route path="/login"   element={ <Login   setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

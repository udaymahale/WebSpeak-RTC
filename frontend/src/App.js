import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

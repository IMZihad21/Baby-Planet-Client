import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Products from './Pages/Products/Products/Products';
import Authentication from './Pages/Authentication/Authentication/Authentication';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Redirect to='/home' />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/authentication">
            <Authentication />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

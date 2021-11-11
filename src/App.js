import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';
import Products from './Pages/Products/Products/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
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

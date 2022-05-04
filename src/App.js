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
import NotFound from './Pages/Shared/NotFound/NotFound'
import Products from './Pages/Products/Products/Products';
import Authentication from './Pages/Authentication/Authentication/Authentication';
import ProductPurchase from './Pages/Products/ProductPurchase/ProductPurchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Utilities/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router basename="/babyPlanet">
        <Header />
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
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/products">
            <Products />
          </Route>
          <PrivateRoute path="/purchase/:productID">
            <ProductPurchase />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Checkout from "./components/Checkout/Checkout";
import Login from './components/Auth/Login/Login';
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute';
import Profile from './components/Auth/Profile/Profile';
import Signup from './components/Auth/Signup/Signup';
import Catalogue from "./components/Catalogue/Catalogue";
import Errorpage from './components/ErrorPage/Errorpage';
import Layout from "../src/components/Layout/Layout"
import Informacion from '../src/components/Informacion/Informacion';
import Ubicacion from '../src/components/Ubicacion/Ubicacion';
import UserState from './config/contexts/users/UserState';
import Homy from "./components/Homy/Homy";
import ShoppingCartState from "./config/contexts/shopping-cart/ShoppingCartState";
import CatalogoSelector from "./components/Catalogue/Selector/CatalogoSelector";

function App() {
  return (
    <>
      <ShoppingCartState>
        <UserState>
          <Routes>
            <Route
              path="/"
              element={<Layout />}
            >
              { /* Ruta privada - PR antes del P */}
              <Route path="/profile" element={
                <PrivateRoute>
                  <Profile></Profile>
                </PrivateRoute>
              }>
              </Route>
              <Route path="/checkout" element={
              <PrivateRoute>
              <Checkout>
                </Checkout>
                </PrivateRoute>
                }>
                </Route>
              {/* Rutas de auth */}
              <Route
                path="/auth/login"
                element={
                  <Login></Login>
                }>
              </Route>
              <Route
                path="/auth/signup"
                element={
                  <Signup></Signup>
                }>
              </Route>
              { /* Rutas públicas */}
              <Route
                path="/"
                element={<Homy />}
              />
              <Route
                path="/catalogo-selector"
                element={<CatalogoSelector />}
              />
              <Route
                path="/catalogue"
                element={<Catalogue />}
              />

              <Route
                path="/informacion"
                element={<Informacion />}
              />
              <Route
                path="/ubicacion"
                element={<Ubicacion />}
              />
              <Route
                path='*'
                element={<Errorpage />}
              />
            </Route>
          </Routes>
        </UserState>
      </ShoppingCartState>
    </>
  );
}

export default App;



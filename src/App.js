import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import Restaurants from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";
import Login from './components/login';

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/restaurants" className="navbar-brand">
        Restaurants Reviews
      </a>
      <div className="narbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/restaurants"} className="nav-link text-light">
            Restaurants
          </Link>
        </li>
        <li className="nav-item text-light">
          { user ? 
          <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
            Logout {user.name}
          </a>
          :
          <Link to={"/login"} className="nav-link text-light">
            Login
          </Link>
          }
        </li>
      </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path="/restaurants" element={<RestaurantsList />} />
          <Route 
          exact path="/restaurants/:id/review" element={ <AddReview user={user} />
          }/>
          <Route 
          exact path="/restaurants/:id" element={ <Restaurants user={user} />
          }/>
          <Route 
          exact path="/login" element={ <Login login={login} />
          }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

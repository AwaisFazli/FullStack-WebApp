import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import Main from "./Pages/posts/Main";
import Signin from "./Pages/SignIn/Signin";
import Signup from "./Pages/Signup/Signup";
import Profile from "./Pages/Profile/Profile";


function App() {
  return (
    <div className="App ">


<Router>
    <Route path={ '/' } exact>
      <Main />
    </Route>
    

    <Route path={ '/signin' } exact>
      <Signin />
    </Route>

    <Route path={ '/signup' } exact>
      <Signup />
    </Route>

    <Route path={ '/profile' } exact>
      <Profile />
    </Route>
    {/* <Redirect to={ '/' }/> */}


  </Router>

    </div>
  );
}

export default App;

import { useState } from "react";
import { ResponseObject } from "./types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/forms/utility/ProtectedRoute";
import Authentication from "./pages/authentication";
import Unauthorized from "./pages/unauthorized";
import Account from "./pages/account";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {

  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const [userData, setUserData] = useState<ResponseObject>();

  const handleLoginState = (loginState : boolean) : void => {
    setLoginStatus(loginState);
  }

  const handleUserData = (response : ResponseObject) : void => {
    console.log("USER DATA: ", response);
    setUserData(response);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/unauthorized' component={Unauthorized} />
          <Route exact path="/">
            <Authentication 
              loginCallback={handleLoginState}
              userCallback={handleUserData}
              loginStatus={loginStatus} 
            />
          </Route>
          <ProtectedRoute 
            exact 
            path='/account' 
            component={Account} 
            loginStatus={loginStatus} 
            userData={userData}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

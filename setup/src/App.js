import Signup from "./components/authentication/Signup";
import Login from "./components/authentication/Login";
import Dashboard from "./components/authentication/Dashboard";
import ForgotPassword from "./components/authentication/ForgotPassword";
import Sidebar from "./components/sidebar/Sidebar";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/authentication/PrivateRoute";
import UpdateProfile from "./components/authentication/UpdateProfile";
import Main from "./components/Main";
import LandingPage from "./components/landing-page/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            {/* <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}

            <Route exact path="/" component={LandingPage} />
            <Route path="/main" component={Main} />

            {/* Auth Routes */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

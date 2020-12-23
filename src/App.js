import {Switch, Route} from "react-router-dom"

// Components imports
import Home from "./components/Home"

//HOC which wraps around other components
import Layout from "./components/common/Layout"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Profile from "./components/Profile"

// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <Layout>
    <Switch>
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
    </Layout>
  );
};

export default App;

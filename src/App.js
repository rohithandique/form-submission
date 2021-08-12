import Hero from "./components/Hero"
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/utils/PrivateRoute";

function App() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Hero} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </Router>
    
  );
}

export default App;

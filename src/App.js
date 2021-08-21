import { AuthProvider } from "./contexts/AuthContext";
import { FormProvider } from "./contexts/FormContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard"
import PrivateRoute from "./components/utils/PrivateRoute";
import Landing from "./components/Landing";

function App() {

  return (
    <Router>
      <AuthProvider>
        <FormProvider>
          <Switch>
            <Route exact path="/" component={Landing} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </FormProvider>
      </AuthProvider>
    </Router>
    
  );
}

export default App;

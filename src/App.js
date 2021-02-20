import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./App/Pages/Welcome";
import Error404 from "./App/Pages/Error404";
import UserLogin from "./App/Pages/User/UserLogin";
import UserSignup from "./App/Pages/User/UserSignup";
import UserDash from "./App/Pages/User/UserDash";
import DoctorLogin from "./App/Pages/Doctor/DoctorLogin";
import DoctorSignup from "./App/Pages/Doctor/DoctorSignup";
import DoctorDash from "./App/Pages/Doctor/DoctorDash";
import { ToastContainer, toast } from "react-toastify";
import { Provider } from "react-redux";
import store from "./App/Redux/store";
import DoctorList from "./App/Pages/User/DoctorList";

toast.configure();
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Welcome} />
            {/* User routes */}
            <Route path="/user/login" component={UserLogin} />
            <Route path="/user/signup" component={UserSignup} />
            <Route path="/user/dash" component={UserDash} />
            <Route path="/user/availabledoctors" component={DoctorList} />

            {/* Healthcare worker routes */}
            <Route path="/doctor/login" component={DoctorLogin} />
            <Route path="/doctor/signup" component={DoctorSignup} />
            <Route path="/doctor/dash" component={DoctorDash} />

            <Route path="*" component={Error404} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

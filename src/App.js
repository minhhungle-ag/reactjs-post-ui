import { Directions } from "@material-ui/icons";
import { Switch, Route, Redirect } from "react-router";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import HomeFeature from "./features/HomePage";
import AddEditPage from "./features/HomePage/pages/add-edit";

function App() {
  return (
    <div className="App">
      <Header icon={<i class="fas fa-plus-circle"></i>} title="Add new post" />
      <Banner />
      <Switch>
        <Redirect path="/" to="/home" exact />
        <Route path="/" component={HomeFeature} exact />
        <Route path="/home" component={HomeFeature} />
        <Route path="/add-edit" component={AddEditPage} />
      </Switch>
    </div>
  );
}

export default App;

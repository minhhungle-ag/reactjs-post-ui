import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import HomeFeature from './features/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect path="/" to="/home" exact />
        <Route path="/" component={HomeFeature} exact />
        <Route path="/home" component={HomeFeature} />
      </Switch>
    </div>
  );
}

export default App;

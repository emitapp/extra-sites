import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import EmailVerification from './EmailVerification';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/verifyEmail" component={EmailVerification} />
          <Route path="/" component={
            () => {
              window.location.href = 'https://getemit.com/';
              return null;
            }} />
        </Switch>
      </div>
    )
  }
}

export default App;
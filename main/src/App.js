import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from './Main';
import Press from './Press'
import TOS from './TOS'
import PP from './PP'
import Contact from './Contact'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/press" component={Press} />
          <Route path="/shop" component={link("https://www.redbubble.com/people/biteup/")} />
          <Route path="/merch" component={link("https://www.redbubble.com/people/biteup/")} />
          <Route path="/status" component={link("https://status.firebase.google.com/")} />
          <Route path="/stack" component={link("https://stackshare.io/emit/emit")} />

          <Route path="/terms-of-service" component={TOS} />
          <Route path="/privacy-policy" component={PP} />
          <Route path="/contact" component={Contact} />

          <Route path="/" component={Main} />
        </Switch>
      </div>
    )
  }
}

const link = (url) => {
  return () => {
    window.location.href = url;
    return null;
  }
}

export default App;
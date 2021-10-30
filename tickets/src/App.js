import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import IframeHolder from './IframeHolder';
import Home from './Home'

const urlMap = {
  test: "https://svhalloween.isotopeticketing.com/60d164e39a5d2e141b480c0b",
  halloween2021: "https://svhalloween.isotopeticketing.com/617c5ceee61c1a0e99ed0bb9"
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          {
            Object.entries(urlMap).map(e =>
              <Route exact
                key={e[0]}
                path={`/t/${e[0]}`}
                render={(props) => <IframeHolder ticketPortalUrl={e[1]} {...props} />
                } />
            )
          }
          <Route path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App;
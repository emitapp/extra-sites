import Footer from 'Footer';
import Header from 'Header';
import { Component } from "react";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />

        <div className="content">
          <div style={{
            height: "100%", width: "100%", alignItems: "center",
            justifyContent: "center", display: "flex", flexDirection: "row",
          }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p className={"normal-text"} style={{ width: "80%" }}>
                You can contact us via theemitmail [at] gmail [dot] com
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
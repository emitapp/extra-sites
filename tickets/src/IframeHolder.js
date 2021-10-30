import Footer from 'Footer';
import Header from 'Header';
import { Component } from "react";

class Home extends Component {

  render() {

    return (
      <div className="App">

        <Header />

        <div className="content">
          <div style={{
            height: "100%", width: "100%", alignItems: "center",
            justifyContent: "center", display: "flex", flexDirection: "column",
          }}>

            <iframe
              title="Ticket Portal"
              src={this.props.ticketPortalUrl} className="ticketIframe"
            >
              😢 Your browser doesn't support iFrames. 😭
            </iframe>

          </div>
        </div>


        <Footer >
        </Footer>
      </div>
    )
  }
}

export default Home;


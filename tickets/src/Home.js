import Footer from 'Footer';
import Header from 'Header';
import { TicketSplashScreen } from 'media/Animations';
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

            <div style={{
              margin: 8,
              justifyContent: "center", display: "flex",
              flexDirection: "column", alignItems: "center"
            }}>

              <TicketSplashScreen />

              <p className={"title"}>
                Looking for last minute tickets?
              </p>
              <p>
                Get on the Emit app and see if you can find a flare a tickets.getemit.com link 👀
              </p>


              <form>
                <button
                  class="button"
                  formaction="https://download.getemit.com">
                Download Emit
                </button>
              </form>
            </div>
          </div>
        </div>


        <Footer >
          <p style={{ color: "lightgray", fontSize: 12, marginRight: 8 }}>
            Animations by
            <a href="https://lottiefiles.com/45733-movie-time-animation">Pierre Blavette</a>
          </p>
        </Footer>
      </div>
    )
  }
}

export default Home;


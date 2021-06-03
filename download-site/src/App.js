import Logo from 'media/LogoWhite.png';
import { Component } from "react";
import './App.css';
import { PhoneAnimation } from 'media/Animations'
import AppStoreBadge from 'media/AppStoreBadge.svg';
import {isIOS, isAndroid} from 'react-device-detect'



class App extends Component {

  constructor() {
    super()
    if (isIOS){
      window.location.href = "https://apps.apple.com/app/id1553654500";
    }
    if (isAndroid){
      window.location.href = "https://play.google.com/store/apps/details?id=com.getemit";
    }
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <a href="https://getemit.com/" target="_blank" rel="noreferrer">
            <img
              style={{ height: 50, marginRight: 24, marginLeft: 24 }}
              src={Logo}
              alt="Emit Logo"
            />
          </a>
          <a href="https://getemit.com/"
            style={{ color: "inherit", textDecoration: "inherit" }}
            target="_blank"
            rel="noreferrer">
            <p> Emit </p>
          </a>
        </header>

        <div className="content">
          <div style={{
            flex: 1, width: "100%", alignItems: "center",
            justifyContent: "center", display: "flex", flexDirection: "column"
          }}>
            <PhoneAnimation />
            <p> Get it on iOS and Android! </p>

            <div style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", display: "flex" }}>
              <a href="https://apps.apple.com/app/id1553654500">
                <img
                  style={{ height: 60, marginRight: 24, marginLeft: 24 }}
                  src={AppStoreBadge}
                  alt="Emit Logo"
                />
              </a>

              <a href='https://play.google.com/store/apps/details?id=com.getemit&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img
                  style={{ height: 85, marginRight: 24, marginLeft: 24 }}
                  alt='Get it on Google Play'
                  src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
              </a>

            </div>


          </div>
        </div>


        <footer className="footer">
          <p style={{ alignSelf: "flex-end", color: "lightgray", fontSize: 12, marginRight: 8 }}>
            Animations by <a href="https://lottiefiles.com/33541-smartphone-animation">Rodrigo Piegel Rosass</a>
          </p>
          <div className="footer-main-content">
          </div>

        </footer>
      </div>
    )
  }
}

export default App;


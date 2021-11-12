import Footer from 'Footer';
import Header from 'Header';
import Shot1 from "media/screenshots/1.png"
import Shot2 from "media/screenshots/2.png"
import Shot3 from "media/screenshots/3.png"
import Shot4 from "media/screenshots/4.png"
import Shot5 from "media/screenshots/5.png"
import { Component } from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: Shot1,
  },
  {
    url: Shot2,
  },
  {
    url: Shot3,
  },
  {
    url: Shot4,
  },
  {
    url: Shot5,
  },
];

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

            <div className="slide-container" style={{ width: 400, height: 500, margin: 16 }}>
              <Fade
                duration={2000}
              >
                {fadeImages.map((fadeImage, index) => (
                  <div className="each-fade" key={index} >
                    <div className="image-container">
                      <img
                        src={fadeImage.url}
                        alt=""
                        style={{ height: 500, width: 300, objectFit: "contain" }}
                      />
                    </div>
                  </div>
                ))}
              </Fade>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p className={"title"}>What is Emit?</p>
              <p className={"normal-text"} style={{ width: "80%" }}>
                <strong>
                  Emit is an app that's designed to make it easier for people to find things happening in and round their
                  campus!
                </strong>
                <br />
                <br />
                Emit was created by a startup run by co-founders Anderson Addo, Brandon Li and Nathaniel Goodman in
                Brown University from 2020 to 2021. The founders have moved on to new projects, so the app is in autopilot mode and has been open-sourced.
              </p>

              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <form style={{ marginRight: 16 }}>
                  <button
                    className="button"
                    formAction="https://download.getemit.com">
                    Download Emit
                  </button>
                </form>
                <form style={{ marginRight: 16 }}>
                  <button
                    className="button"
                    formAction="https://github.com/emitapp">
                    Our Github
                  </button>
                </form>
                <form>
                  <button
                    className="button"
                    formAction="/press">
                    Press
                  </button>
                </form>
              </div>

              <p className={"normal-text"} style={{ width: "80%" }}>

                🚧Working on post-mortems!🚧
                {/* <strong>
                  Why we failed
                </strong>
                <br />
                <a href=""> Anderson's Take </a> 
                *** 
                <a href=""> Brandon's Take </a> */}
              </p>

              <p className={"normal-text"} style={{ width: "80%" }}>
                <a href={"https://forms.gle/qyBSAJ93giwjGnp17"}>
                  Want to get contacted when we make something new?
                </a>
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
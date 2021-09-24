import { Component } from "react";
import Logo from 'media/LogoWhite.png';
import { ErrorAnimation, SuccessAnimation, LoadingAnimation } from 'media/Animations'
import qs from 'qs'
import { initializeApp, getApps } from 'firebase/app';
import firebaseConfig from '.env/firebase';
import axios from 'axios'

const myAxios = axios.create({
  baseURL: 'https://us-central1-the-og-lunchme.cloudfunctions.net',
  timeout: 3000,
})

class App extends Component {

  state = {
    isLoading: true,
    validRequest: true,
    success: false,
    errorMessage: ""
  }

  componentDidMount() {
    if (getApps().length === 0) initializeApp(firebaseConfig);

    const params = this.getGETParams()
    if (!params.oobCode || !params.mode || !params.apiKey) {
      this.setState({ isLoading: false, validRequest: false })
    } else {
      myAxios.request({
        url: "/verifyEmail",
        params,
      }).then(response => {
        this.setState({ isLoading: false, success: response.status === 200 })
      }).catch(response => {
        let message = ""
        const body = response?.response?.data
        if (typeof body == "string") message = body
        else message = body?.message ?? ""
        this.setState({ isLoading: false, success: false, errorMessage: message })
      })
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
            <p> Emit Email Verification </p>
          </a>
        </header>

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
              {this.getMainUI()}

            </div>

          </div>
        </div>


        <footer className="footer">
          <p style={{ alignSelf: "flex-end", color: "lightgray", fontSize: 12, marginRight: 8 }}>
            Animations by
            <a href="https://lottiefiles.com/38064-error-cone">Fernando</a>,
            <a href="https://lottiefiles.com/796-check-mark">Ryan</a>,
            <a href="https://lottiefiles.com/75839-jump-through-4-hoops">andru</a>
          </p>
          <div className="footer-main-content">
          </div>

        </footer>
      </div>
    )
  }

  renderSuccessUI = () => {
    return (
      <>
        <SuccessAnimation />
        <p className={"statusTitle"}>
          Email verified! Restart Emit on your phone and you should see the changes.
        </p>
      </>
    )
  }

  renderInvalidRequestUI = () => {
    return (
      <>
        <ErrorAnimation />
        <p className={"statusTitle"}>
          Invalid Request! You sure you're meant to be here? 👀
        </p>
      </>
    )
  }

  renderErrorUI = () => {
    const defaultErrorMessage = `Either you are already verified ` +
      `(this link only shows "success" the first time its opened), or this request is invalid.`
    return (
      <>
        <ErrorAnimation />
        <p className={"statusTitle"}>
          Something went wrong!
        </p>
        {/* For some reason in rare cases errorMessage has no value. Not worth deep investigation. */}
        <p>{this.state.errorMessage || defaultErrorMessage}</p>
      </>
    )
  }

  renderLoadingUI = () => {
    return (
      <>
        <LoadingAnimation />
        <p className={"statusTitle"}>
          Getting there...
        </p>
      </>
    )
  }

  getMainUI = () => {
    if (!this.state.validRequest) return this.renderInvalidRequestUI()
    if (this.state.isLoading) return this.renderLoadingUI()
    if (this.state.success) return this.renderSuccessUI()
    return this.renderErrorUI()
  }

  getGETParams = () => {
    let params = null
    const search = this.props?.location?.search
    if (search) params = qs.parse(search.substring(1)) //Get rid of the trailing "?"
    else params = {}
    const { mode, oobCode, apiKey } = params
    return {
      mode: mode?.toString() ?? "",
      oobCode: oobCode?.toString() ?? "",
      apiKey: apiKey?.toString() ?? ""
    }
  }
}



export default App;


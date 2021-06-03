import { Component } from "react";
import './App.css';
import { CleaningAnimation } from 'Animations'
import Dropper from './dropper'

class App extends Component {

  state = {
    textAreaValue: "",
    subject: "",
    error: ""
  };

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <CleaningAnimation />
          <p> Emit Email Washer </p>
        </header>

        <div className="content">
          <div style={{
            height: "100%", width: "100%", alignItems: "center",
            justifyContent: "center", display: "flex", flexDirection: "column",
          }}>

            <p>
              This is a quite site that's meant to alter HTML from Mailchimp templates and make it
              compatible with Sendy.
            </p>

            <div style={{ flexDirection: "row", display: "flex", marginBottom: 8 }}>
              <div style={{ width: 200, height: 200, border: '1px solid red' }}>
                <Dropper
                  callback={(str) => this.setState({ textAreaValue: str })} style={{ backgroundColor: "grey" }}
                  onError={() => this.setState({ err: "Error readng file!" })} />

              </div>
              <div>
                <p style={{ color: "red" }} className='new-line'>
                  {this.state.error}
                </p>

                {this.state.success && <p style={{ color: "green" }}>
                  Done!
            </p>}
              </div>
            </div>



            <div style={{ flexDirection: "row", marginBottom: 8 }}>
              <label>Email subject: </label>
              <input
                value={this.state.subject}
                style={{ width: 400 }}
                onChange={(event) => this.setState({ subject: event.target.value })}
              />
            </div>

            <p>HTML:</p>

            <textarea
              style={{ width: "80%", minHeight: "30%" }}
              value={this.state.textAreaValue}
              onChange={(event) => this.setState({ textAreaValue: event.target.value })}
              ref={(textarea) => this.textArea = textarea}
            />

          </div>
        </div>

        <div style={{ flexDirection: "row", display: "flex", marginBottom: 8, justifyContent: "center" }}>
          <button onClick={this.clean}>Wash</button>
          {document.queryCommandSupported('copy') && <button onClick={this.copy}>Copy</button>}
        </div>


        <footer className="footer">
          <p style={{ alignSelf: "flex-end", color: "lightgray", fontSize: 12, marginRight: 8 }}>
            Animations by <a href="https://lottiefiles.com/61502-clean-up-rubbish">liang</a>
          </p>
          <div className="footer-main-content">
          </div>

        </footer>
      </div>
    )
  }

  copy = () => {
    this.textArea.select();
    document.execCommand('copy');
  }

  clean = () => {
    this.setState({ error: "", success: false })
    if (!this.state.subject.trim()) {
      this.setState({ error: "No subject" })
      return
    }

    if (!this.state.textAreaValue.trim()) {
      this.setState({ error: "No HTML to wash" })
      return
    }

    let target = this.state.textAreaValue

    target = this.replace(target, 'You can unsubscribe here.',
      "<unsubscribe>Unsubscribe here</unsubscribe>", 1)

    target = this.replace(target, 'View web version',
      "<webversion>View web version</webversion>", 1)

    target = this.replace(target, '*|MC_PREVIEW_TEXT|*',
      this.state.subject, 1)

    target = this.replace(target, '*|MC:SUBJECT|*',
      this.state.subject, 1)

    target = this.replace(target, '<!--*|IF:MC_PREVIEW_TEXT|*-->',
      "", 1)

    target = this.replace(target, '<!--*|END:IF|*-->',
      "", 1)

    this.setState({ textAreaValue: target, success: true })
  }


  replace = (target, oldString, newString, numberExpected) => {
    if (this.countOccurances(oldString, target) != numberExpected)
      this.setState(prevState => {
        return {
          error: prevState.error +
            `\nInstances of '${oldString}' not equal to ${numberExpected}`
        }
      })
    return target.replace(oldString, newString)
  }

  countOccurances = (substring, mainString) => {
    let re = new RegExp(this.escapeRegExp(substring), 'g');
    return (mainString.match(re) || []).length;
  }

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
  escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
}

export default App;


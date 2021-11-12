import Footer from 'Footer';
import Header from 'Header';
import { Component } from "react";

class App extends Component {

  links = [
    {
      url: "https://entrepreneurship.brown.edu/2021/07/meet-b-lab-2021-venture-emit/", 
      title: "Brown University Nelson Center Blog Post"
    },
    {
      url: "https://www.browndailyherald.com/article/2021/09/emit-social-app-founded-by-student-entrepreneurs-aims-to-expand-connections", 
      title: "Our Feature on the Brown Daily Herald"
    },
    {
      url: "https://www.youtube.com/watch?v=k72nGqqFlmw&t=1562s", 
      title: "Our pitch as part of Brown's B-lab 2021 cohort"
    },
  ]

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
              <p className={"title"}>We've been mentioned a couple places :)</p>
              <p className={"normal-text"} style={{ width: "80%" }}>
                {this.links.map((item) => <><a href={item.url}>{item.title}</a><br></br></>)}
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
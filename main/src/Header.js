import Logo from 'media/LogoWhite.png';
import Twitter from 'media/twitter.png'
import Instagram from 'media/instagram.png'
import TikTok from 'media/tiktok.png'
import { PureComponent } from "react";
import { withRouter } from 'react-router-dom'


class Header extends PureComponent {

    render() {

        return (
            <header className="App-header">
                <img
                    style={{ height: 40, marginRight: 24, marginLeft: 24 }}
                    src={Logo}
                    alt="Emit Logo"
                    onClick={() => this.props.history.push("/")}
                />

                <p onClick={() => this.props.history.push("/")}>
                    Emit
                </p>

                <div style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    flex: 1,
                }}>
                    <a href={"https://twitter.com/getemit_"}
                        style={{ color: "inherit", textDecoration: "inherit" }}
                        rel="noreferrer">
                        <img
                            style={{ height: 25, marginRight: 24, marginLeft: 24 }}
                            src={Twitter}
                            alt="Twitter logo"
                        />
                    </a>

                    <a href={"https://www.instagram.com/getemit_/"}
                        style={{ color: "inherit", textDecoration: "inherit" }}
                        rel="noreferrer">
                        <img
                            style={{ height: 25, marginLeft: 24 }}
                            src={Instagram}
                            alt="Ig logo"
                        />
                    </a>

                    <a href={"https://www.tiktok.com/@getemit"}
                        style={{ color: "inherit", textDecoration: "inherit" }}
                        rel="noreferrer">
                        <img
                            style={{ height: 25, marginLeft: 24 }}
                            src={TikTok}
                            alt="TikTok logo"
                        />
                    </a>

                </div >
            </header >
        )
    }
}

export default withRouter(Header)
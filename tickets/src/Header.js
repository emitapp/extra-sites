import Logo from 'media/LogoWhite.png';
import { PureComponent } from "react";

export default class Header extends PureComponent {

    render() {

        return (
            <header className="App-header">
                <a href={window.location.hostname} rel="noreferrer">
                    <img
                        style={{ height: 40, marginRight: 24, marginLeft: 24 }}
                        src={Logo}
                        alt="Emit Logo"
                    />
                </a>
                <a href={window.location.hostname}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    rel="noreferrer">
                    <p> Emit Tickets </p>
                </a>
            </header>
        )
    }
}
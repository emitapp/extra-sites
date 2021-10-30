import { PureComponent } from "react";

export default class Footer extends PureComponent {

    render() {
        return (
            <footer className="footer">
                <div className="footer-main-content">
                    {this.props.children}
                </div>
            </footer>
        )
    }
}
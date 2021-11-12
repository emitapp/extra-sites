import { PureComponent } from "react";

export default class Footer extends PureComponent {

    render() {
        return (
            <footer className="footer">
                <div className="footer-main-content">
                    - <a href="/merch"> Merch</a> -
                    - <a href="/stack"> Stack</a> -
                    - <a href="/terms-of-service"> Terms of Service</a> -
                    - <a href="/privacy-policy"> Privacy Policy</a> -
                </div>
            </footer>
        )
    }
}
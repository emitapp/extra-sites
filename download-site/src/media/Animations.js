import { PureComponent } from "react"

export class PhoneAnimation extends PureComponent {
    //https://lottiefiles.com/16773-fire
    render() {
        return (
            <lottie-player
                src="https://assets6.lottiefiles.com/private_files/lf30_wsoidc.json"
                background="transparent"
                speed="1"
                style={{ width: 300, height: 300, ...this.props.style }}
                loop autoplay />

        )
    }
}
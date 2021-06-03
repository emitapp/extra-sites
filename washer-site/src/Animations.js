import { PureComponent } from "react"

export class CleaningAnimation extends PureComponent {
    //https://lottiefiles.com/16773-fire
    render() {
        return (
            <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_brpxutzq.json"
                background="transparent"
                speed="1"
                style={{ width: 100, height: 100, ...this.props.style }}
                loop autoplay />

        )
    }
}
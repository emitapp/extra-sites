import { PureComponent } from "react"

export class TicketSplashScreen extends PureComponent {
    //https://lottiefiles.com/45733-movie-time-animation
    render() {
        return (
            <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_6bxfzphq.json"
                background="transparent"
                speed="1"
                style={{ width: 350, height: 350, ...this.props.style }}
                autoplay />
        )
    }
}
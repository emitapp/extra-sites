import { PureComponent } from "react"

export class ErrorAnimation extends PureComponent {
    //https://lottiefiles.com/38064-error-cone
    render() {
        return (
            <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_IIxb9U.json"
                background="transparent"
                speed="1"
                style={{ width: 350, height: 350, ...this.props.style }}
                autoplay />
        )
    }
}

export class SuccessAnimation extends PureComponent {
    //https://lottiefiles.com/796-check-mark
    render() {
        return (
            <lottie-player
                src="https://assets8.lottiefiles.com/datafiles/7aeDjIq0a63VZGd/data.json"
                background="transparent"
                speed="1"
                style={{ width: 350, height: 350, ...this.props.style }}
                autoplay />

        )
    }
}

export class LoadingAnimation extends PureComponent {
    //https://lottiefiles.com/75839-jump-through-4-hoops
    render() {
        return (
            <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_0sqygfw1.json"
                background="transparent"
                speed="1"
                style={{ width: 350, height: 350, ...this.props.style }}
                autoplay
                loop />

        )
    }
}
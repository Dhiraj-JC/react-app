import {Component} from "react";

class HelloWorld extends Component {

    render() {
        const {message, message1} = this.props;
        return (
            <h1>{message + message1}</h1>
        );
    }


    componentWillUnmount() {
        console.log("componentWillUnmount get executed");
    }
}

export default HelloWorld;
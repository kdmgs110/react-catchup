import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor (){
        super();
        this.state = {
            name: "DAI"
        };
    }
    render() {
        setTimeout(
            () => {
                this.setState({name: "KAWAI"});
            }, 1000
        );
        const title = "Welcome DAI"
        return (
            <div>
                {this.state.name}
                <Header title={title} />
                <Footer />
            </div>

    );
    }
}

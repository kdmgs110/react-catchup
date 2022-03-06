import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor (){
        super();
        this.state = {
            title: "TITLE GOES HERE",
        };
    }

    changeTitle(title){
        this.setState({title});
    }

    render() {

        const title = "Welcome DAI"
        return (
            <div>
                {this.state.name}
                <Header title={title} changeTitle={this.changeTitle.bind(this)}/>
                <Footer />
            </div>

    );
    }
}

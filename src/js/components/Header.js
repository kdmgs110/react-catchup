import React from "react";
import Title from "./Header/Title";
import Navbar from "./Header/Navbar";

export default class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <header>
                <Navbar />
                <Title />
            </header>
        )
    }
}
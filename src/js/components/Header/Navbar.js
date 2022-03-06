import React from "react";

export default class Navbar extends React.Component {
    render(){
        return (
            <div>
                <nav className="bg-blue-500">
                    <ul className="flex">
                        <li className="mr-6">
                            <a className="text-blue-500 hover:text-blue-800" href="#">Home</a>
                        </li>
                        <li className="mr-6">
                            <a className="text-blue-500 hover:text-blue-800" href="#">Home</a>
                        </li>
                        <li className="mr-6">
                            <a className="text-blue-500 hover:text-blue-800" href="#">Home</a>
                        </li>
                        <li className="mr-6">
                            <a className="text-blue-500 hover:text-blue-800" href="#">Home</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
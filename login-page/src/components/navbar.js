import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div>
             <a class="active" href="#home">Home</a>
             <a href="#news">News</a>
             <a href="#contact">Contact</a>
             <a href="#about">About</a>
            </div>
        ) 
    }
}
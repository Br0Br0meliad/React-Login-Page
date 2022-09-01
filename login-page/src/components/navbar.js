import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <nav>
             <span>LOGO</span>
             <a href="#home">Home</a>
             <a href="#about">About</a>
             <a href="#signup">Sign Up</a>
             <a href="#download">Download App</a>
             <div className="search-container">
                <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">Submit</button>
                </form>
             </div>
            </nav>
        ) 
    }
}

export default Navbar;
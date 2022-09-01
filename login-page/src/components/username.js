import React from "react";

class UsernameInput extends React.Component {
    render() {
        return(
            <form>
                <label>Enter username:
                    <input type="text" />
                </label>
            </form>
        ) 
    }
}

export default UsernameInput;
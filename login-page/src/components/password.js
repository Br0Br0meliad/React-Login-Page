import React from "react";

class PasswordInput extends React.Component {
    render() {
        return(
            <form>
                <label>Enter password:
                    <input type="text" />
                </label>
            </form>
        ) 
    }
}

export default PasswordInput;
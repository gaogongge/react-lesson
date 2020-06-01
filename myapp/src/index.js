import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

class FristCom extends React.Component{
    render(){
        return (
            <div
            className="c1"
            >
                this is my frist react Component
            </div>
        )
    }
}

ReactDOM.render(<FristCom/>,document.getElementById("root"));


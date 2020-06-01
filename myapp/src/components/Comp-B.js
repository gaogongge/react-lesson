import React from "react";
import ReactDom from "react-dom";
class CompB extends React.Component {
    render() {
        return (
            <div>
                <p>this is Com-B</p>
                <p>{this.props.vb}</p>
            </div>
        )
    }
}
export default CompB;
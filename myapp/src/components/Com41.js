import React from "react";
class Com41 extends React.Component{
    constructor(props){
        super(props);
        this.el=React.createRef();
    }
    render(){
        return (
            <div>
                <div ref="refstr1" id="div1"></div>
                <div ref={this.el}>this is refs;</div>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.el);
    }
}

export default Com41;
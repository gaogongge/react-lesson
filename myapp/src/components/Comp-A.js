import React from "react";
import ReactDom from "react-dom";
class CompA extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:this.props.value
        }
        this.showStateChange();
    }
    render(){
        console.log("reload")
        return (
            <div>
                <p>this is Com-A</p>                 
                <p>{this.state.msg} by state</p>
            </div>            
        )
    }
    showStateChange(){
        setTimeout(() => {
            console.log("timer")
            console.log(this.state.msg);
            this.setState({
                msg:"state改变了"
            })      
        }, 2000);
    }
}
export default CompA;
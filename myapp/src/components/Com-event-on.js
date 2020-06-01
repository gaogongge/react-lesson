import React from "react";
import ReactDom from "react-dom";
class ComEvent extends React.Component{    
    constructor(props){
        super(props)
        this.state={
            msg:"绑定事件DOM" 
        }
    }
    render(){
        return(
            <div
            onClick={()=>{this.handlerClick()}}
            >
                {this.state.msg}
            </div>
        )
    }
    handlerClick(){
        this.setState({
            msg:"点击div后，改变state"
        })
    }
}
export default ComEvent
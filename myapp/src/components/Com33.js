import React from "react";
class Com33 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:"初始化数据"
        }

    }
    render(){
        return (
            <div>
                <input value={this.state.msg} onChange={(e)=>{this.handlerChange(e)}}/>
            </div>
        )
    }
    handlerChange(e){
        console.log(e.target.value);
        this.setState({
            msg:e.target.value
        })
    }
}
export default Com33
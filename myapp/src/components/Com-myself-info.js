import React from "react";
class Info extends React.Component {
    data="子组件数据"       
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.info.name}</li>
                    <li>{this.props.info.age}</li>
                    <li>{this.props.info.msg}</li>
                </ul>
                <div>                    
                    <button onClick={() => { this.props.handlerClick(this.data) }}>点击</button>
                </div>
            </div>
        )
    }
}

export default Info;
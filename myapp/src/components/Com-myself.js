import React from "react";
import Info from "./Com-myself-info";
class MySelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                name: "张三",
                age: 30,
                msg: "张三信息"
            }
        }
    }
    render() {
        return (
            <div>
                <h1>个人信息</h1>
                <Info info={this.state.info} handlerClick={(data) => { this.infoClick(data) }}></Info>
                <div>
                    <h1>子组件的数据展示</h1>
                    <p>{this.state.info.msg}</p>
                </div>
            </div>
        )
    }
    infoClick(data) {
        // console.log(this);
        this.setState({
            info: {
                name: "李四",
                age: 40,
                msg: data
            }
        })
    }
}
export default MySelf;
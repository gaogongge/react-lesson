import React from "react"
class Com51 extends React.Component{
    //初始化期
    componentWillMount(){
        //render 之前调用，一般用来通过ajax获取数据
    }
    render(){
        return (
            <div>生命周期</div>
        )
    }
    componentDidMount(){
        //render之后调用，
    }

    //更新期
    componentWillReceiveProps(){
        
    }
}
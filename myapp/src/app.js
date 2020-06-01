import React from 'react';
import ComA from "./components/Comp-A"
import ComB from "./components/Comp-B"
class app extends React.Component{
    render(){
        return (
            <div
            className="c1"
            >
                this is my frist react Component
                <ComA value={'给ComA的参数'}></ComA>
                <ComB vb={'给ComB的参数'}></ComB>
            </div>
        )
    }
}

export default app
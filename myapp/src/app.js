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
                <ComA></ComA>
                <ComB></ComB>
            </div>
        )
    }
}

export default app
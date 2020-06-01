import React from 'react';
import ComA from "./components/Comp-A"
import ComB from "./components/Comp-B"
import ComEvent from "./components/Com-event-on";
import MySelf from "./components/Com-myself"
import Com33 from "./components/Com33"
class app extends React.Component{
    render(){
        return (
            <div
            className="c1"
            >
                this is my frist react Component
                <ComA value={'给ComA的参数'}></ComA>
                <ComB vb={'给ComB的参数'}></ComB>
                <ComEvent></ComEvent>
                <MySelf></MySelf>
                <Com33/>
            </div>
        )
    }
}
export default app
import React from "react";
import { Link } from "react-router-dom";
class PageC extends React.Component {
    render() {
        return (<div>
            <Link to="/a">A页面</Link>
            <Link to="/b">B页面</Link>
            <Link to="/c">C页面</Link>
            <h2>C页面</h2>
        </div>);
    }
}
export default PageC;
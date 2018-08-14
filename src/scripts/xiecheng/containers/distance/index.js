import React,{Component} from "react";

import {Link} from "react-router";
export default class Distance extends Component{
    render(){
        // var ch = document.documentElement.clientHeight||document.body.clientHeight;
        // var distanceHeight = 1823;
        return(
            <div className="distance">
                <Link className="distance-create" to="/create">
                    <i className="iconfont icon-bijibennotebook43"></i>
                    <p>
                        <span>如何一键生成行程</span>
                        <i className="iconfont icon-wenhao"></i>
                    </p>
                </Link>
            </div>
        )
    }
}
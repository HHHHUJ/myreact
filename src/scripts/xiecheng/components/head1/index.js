import React,{Component} from "react";
import {Link,Route,Router,browserHistory} from "react-router";
export default class Head1 extends Component {
    goBack=()=>{
        this.context.router.go(-1)
    }
    static contextTypes={
        router: React.PropTypes.object
    }
    render(){
        return (
            <div className="head1box">
                <div className="head1">
                    <Link onClick={this.goBack}>
                        <i className="iconfont icon-zuojiantou"></i>
                    </Link>
                    <span>{this.props.word}</span>
                </div>
            </div>
        )
    }
}
import React,{Component} from "react";
import {Link,Route,Router,browserHistory} from "react-router";


import {connect} from "react-redux"

// import {get_name} from "../../actions"
@connect(
    (state)=>({...state})
)
export default class Head2 extends Component {
    goBack=()=>{
        this.context.router.go(-1)
    }
    static contextTypes={
        router: React.PropTypes.object
    }
    // componentWillMount(){
    //     let did = this.props.params.id
    //     const {dispatch} = this.props;
    //     dispatch(get_adverts("/album",did,dispatch))
    // }
    render(){
        const {areaname} = this.props;
        console.log(areaname)
        return (
            <div className="head1">
                <Link onClick={this.goBack}>
                    <i className="iconfont icon-zuojiantou"></i>
                </Link>
                {/* <span>{this.props.params.id}</span> */}
            </div>
        )
    }
}
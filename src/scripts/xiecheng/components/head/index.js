import React,{Component} from "react";

import {Link} from "react-router";
import {connect} from "react-redux";

@connect(
    (state)=>({...state})
)
export default class Head extends Component{
    
    // changeState=()=>{
    // //    console.log(this.refs)
    // }
    componentWillMount() {
        document.addEventListener('touchmove',(event)=>{
            if(this.refs.headers){
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                let scT = parseInt(scrollTop);
                // let hh = this.refs.headers.
                if(scT>=700){
                    this.refs.headers.style.top = -(this.refs.headers.firstChild.clientHeight)+"px";
                }else{
                    this.refs.headers.style.top = 0+'px';
                }
            }
        }, {passive:true});
        
    }
    render(){
        const {headList} = this.props;
        return(
            <div className="head" ref="headers">
                <div className="header">
                    <div className="search">
                        <Link className="search-blank" to="/search">
                            <i className="iconfont icon-fangdajing"></i>
                            <span>搜索目的地、游记与用户</span>
                        </Link>
                    </div>
                </div>
                <div className="iconlist" >
                    {
                        headList.map((item,idx)=>{
                            return (
                                <Link  to={item.url}  key={idx} activeClassName="active">
                                    <i className={"iconfont "+item.icon} ref={"i"+idx}></i>
                                    <span ref={"s"+idx}>{item.txt}</span>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
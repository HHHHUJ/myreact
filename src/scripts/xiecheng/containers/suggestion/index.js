import React,{Component} from "react";

import {Link} from "react-router";
import Head1 from "../../components/head1"

import {connect} from "react-redux"

import {} from "../../actions"
@connect(
    (state)=>({...state})
)

export default class Suggestion extends Component{
    constructor(props){
        super(props)
        this.state={
            suggestionIcon:[
                {txt:"赞",icon:"icon-zan"},
                {txt:"收藏",icon:"icon-shoucang3"},
                {txt:"关注",icon:"icon-guanzhu"},
                {txt:"评论",icon:"icon-pinglun"},
                {txt:"系统通知",icon:"icon-lingdang1"}
            ]
        }
    }
    render(){
        const {suggestionIcon} = this.state;
        return(
            <div className="suggestion">
                <Head1 word="消息中心"/>
                <div className="suggestion-nav">
                    {
                        suggestionIcon.map((item,idx)=>{
                            return(
                               <Link key={idx} className="nav-list">
                                    <section className="nav-section">
                                        <i className={"iconfont "+item.icon}></i>
                                        <span>{item.txt}</span>
                                    </section>
                                    <i className="iconfont icon-ic_send_px onlyi"></i>
                               </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
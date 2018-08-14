import React,{Component} from "react";

import {Link} from "react-router";
import Head1 from "../../components/head1"

import {connect} from "react-redux"

import {} from "../../actions"
@connect(
    (state)=>({...state})
)

export default class Opinion extends Component{
    constructor(props){
        super(props)
    }
    focusChange=(event)=>{
        event.target.style.borderBottom="3px solid #3FC1C9";
    }
    blurChange=(event)=>{
        event.target.style.borderBottom="3px solid #676b6a";
    }
    render(){
        return(
            <div className="opinion">
                <Head1 word="意见反馈"/>
                <div className="opinion-input">
                    <textarea placeholder="给氢气球旅行提意见"  onFocus={this.focusChange} onBlur={this.blurChange}></textarea>
                    <input type="text" placeholder="Email/QQ" onFocus={this.focusChange} onBlur={this.blurChange}></input>
                </div>
            </div>
        )
    }
}
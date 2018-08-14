import React,{Component} from "react";

import {Link} from "react-router";
import Head1 from "../../components/head1"

import {connect} from "react-redux"

import {} from "../../actions"
@connect(
    (state)=>({...state})
)

export default class Addetails extends Component{
    constructor(props){
        super(props)
        this.state={
            personalIcon:[
                {icon:"icon-tupian4"},
                {icon:"icon-gonggeshitu"},
                {icon:"icon-iconfontalignjustify"}
            ]
        }
    }
    render(){
        const {personalIcon} = this.state;
        return(
            <div className="personal">
                <Head1 word="我的游记"/>
                <div className="personal-nav">
                    {
                        personalIcon.map((item,idx)=>{
                            return(
                                <Link activeClassName="personalActive" key={idx}>
                                    <i className={"iconfont "+item.icon}></i>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
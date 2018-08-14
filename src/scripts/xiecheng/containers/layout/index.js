import React,{Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Head from "../../components/head"
import {Link} from "react-router";
import {connect} from "react-redux";
import "../../../../libs/swiper-3.3.1.min.js"
import Home from "../home"
import Travel from "../travel"
import Distance from "../distance"
import Mine from "../mine"
import $ from "../../../../libs/jquery-1.11.2.min.js"
import {getShowIndex} from "../../actions"
import LazyLoad from 'react-lazyload';

@connect(
    (state)=>({...state})
)
// @lazyload({
//     height: 200,
//     once: true,
//     offset: 100
//   })
export default class Layout extends Component {
    constructor(props){
        super(props)
        this.state={
           show:true
        }
    }
    render(){
        const {show} = this.state;
        return(
            <div className="layout">
                <Head/>
                <LazyLoad height={200} offset={100} throttle={100} once>
                <div className="childComponent">
                    <ReactCSSTransitionGroup
                        component="div"
                        className="react-container"
                        transitionName="slide-in"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                            <div key={this.props.location.pathname} className={this.props.location.pathname}>
                                {this.props.children}
                            </div>
                        </ReactCSSTransitionGroup>
                </div>
                </LazyLoad>
            </div>
        )
    }
}



import React,{Component} from "react"
import ReactDOM,{render} from "react-dom"
import {Router,Route,browserHistory,IndexRoute,Redirect,IndexRedirect,hashHistory} from "react-router";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Home from "./home"
import Distance from "./distance"
import Travel from "./travel"
import Mine from "./mine"
import Layout from "./layout"
import Login from "./login"
import Register from "./register"
import Create from "./create"
import Search from "./search"
import Addetails from "./addetails"
import Destinadetails from "./destinadetails"
import Personal from "./personal"
import Suggestion from "./suggestion"  //这个组件是消息组件，名字写错了，就不改了
import Setting from "./setting"
import Opinion from "./opinion"

export default class Layouts extends Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Redirect from="/hujie/dist" to="/" />
                <Route path="/" component={Layout}>
                    <IndexRedirect to="/home" />
                    <Route path="home" component={Home} />
                    <Route path="distance" component={Distance} />
                    <Route path="travel" component={Travel} />
                    <Route path="mine" component={Mine} />
                </Route>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/create" component={Create} />
                <Route path="/search" component={Search} />
                <Route path="/addetails/:id" component={Addetails} />
                <Route path="/destinadetails/:id" component={Destinadetails} />
                <Route path="/personal" component={Personal} />
                <Route path="/suggestion" component={Suggestion} />
                <Route path="/setting/:num" component={Setting} />
                <Route path="/opinion" component={Opinion} />
            </Router>
        )
    }
}

    


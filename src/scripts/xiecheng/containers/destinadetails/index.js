import React,{Component} from "react";

import {Link} from "react-router";
import Head1 from "../../components/head1"

import {connect} from "react-redux"

import {get_des} from "../../actions"
@connect(
    (state)=>({...state})
)

export default class Addetails extends Component{
    constructor(props){
        super(props)
        this.state={
            idname:this.props.params.id,
            areaname:''
        }
    }
    componentWillMount(){
        console.log("componentWillMount")
        let did1 = this.props.params.id
        const {dispatch} = this.props;
        dispatch(get_des("/v3-destinations",did1,dispatch))
    }
    render(){
        const {desList} = this.props;
        console.log(desList)
        const {idname} = this.state;
        return(
            <div className="destinadetails">
                <Head1 word={this.props.params.id}/>
                <h1>{this.props.params.id}</h1>
            </div>
        )
    }
}
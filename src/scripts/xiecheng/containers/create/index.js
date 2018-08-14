import React,{Component} from "react";

import {Link} from "react-router";
import {connect} from "react-redux"

import Head1 from "../../components/head1"

import {get_distance} from "../../actions"
@connect(
    (state)=>({...state})
)
export default class Create extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_distance("/distance",dispatch));
    }
    render(){
       const {distanceList,distanceList1}  = this.props;
       console.log(distanceList.items instanceof Array)
       console.log(distanceList1)
        return(
            <div className="create">
                <Head1 word="氢专题"/>
                <div className="create-title create-base">
                    <h1>{distanceList.title}</h1>
                    <p>{distanceList.summary}</p>
                </div>
                {
                    distanceList1.map((item,idx)=>{
                        return(
                            <div className="create-item" key={idx}>
                                <img src={item.photo.photo_url} />
                                <div className="create-title2 create-base">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>                        
                        )
                    })
                }
            </div>
        )
    }
}
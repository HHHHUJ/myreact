import React,{Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {get_map} from "../../actions";

@connect(
    (state)=>({...state})
)

export default class Search extends Component{
    goBack=()=>{
        this.props.router.go(-1)
    }
    handleSearch=(e)=>{
        const {dispatch} = this.props;
        dispatch(get_map("/search",e.target.value,dispatch))
    }
    clearInfo=()=>{
        this.refs.inp.value = "";
        const {dispatch} = this.props;
        dispatch(get_map("/search", this.refs.inp.value,dispatch))
    }
    render(){
        const {searchList} = this.props;
        return(
            <div className="searchbox">
                <i className="iconfont icon-zuojiantou" onClick={this.goBack}></i>
                <input placeholder="搜索目的地、游记与用户" className="inpt" ref="inp" onInput={this.handleSearch}/>
                <i className="iconfont icon-cha1" onClick={this.clearInfo}></i>
                <div className="searchContainer">
                    {
                        searchList.map((item,idx)=>{
                            return (
                                <Link key={idx}>{item.name}</Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
import React,{Component} from "react";
// import "../../../../libs/zoomerang.js"
import {connect} from "react-redux";
import {Link} from "react-router";
import {get_userinfo} from "../../actions";


@connect(
    (state)=>({...state})
)
// @lazyload({
//     height: 200,
//     once: true,
//     offset: 100
//   })
export default class Travel extends Component{
     constructor(props){
        super(props)
        this.state={
            num1:0,
            num2:0
        }
    }

    componentWillMount(){
        const {dispatch,user} = this.props;
        dispatch(get_userinfo("/timelines",dispatch))
    }
    num1_add=()=>{
        this.setState({
            num1:++this.state.num1
        })
    }
    num2_add=()=>{
        this.setState({
            num2:++this.state.num2
        })
    }
/*************************************分割线***************************************/
   
    /*************************************分割线***************************************/
    render(){
        const {timelineList} = this.props;
        const {num1,num2} = this.state;

        return(
            <div className="travel">
                    {
                        
                        timelineList.map((item,idx)=>{
                            return(
                                <div key={idx} className="userinfobox">
                                    
                                        <div className="userinfo" >
                                            <Link className="touxiang"><img src={item.activity.user.photo_url} /></Link>
                                            <div className="authors">
                                                <span className="authors-name">{item.activity.user.name}</span><br/>
                                                来自&nbsp;<Link className="authors-qname">{item.user.name}</Link>&nbsp;推荐
                                            </div>
                                            <div className="attention">关注她</div>
                                        </div>
                                    
                                    <img id="titleImgs" src={item.activity.contents[0].photo_url}/>
                                        <div className="imgList slipping swiper-no-swiping">
                                            {
                                                item.activity.contents.map((items,idx)=>{
                                                    return(
                                                        <img src={items.photo_url} key={idx}/>
                                                    )
                                                })    
                                            }
                                        </div>
                                   
                                    <div className="description">
                                        <h1 className="h1">{item.activity.topic}</h1>
                                        <p className="article">{item.activity.description}</p>
                                    </div>
                                    <Link className="totaltravel">
                                        {item.activity.user.name}:{item.activity.districts[0].name+"旅行记"+"("+item.activity.parent_district_count+")"}
                                    </Link>
                                    <div className="pinglun">
                                        <section>
                                            <i className="iconfont icon-zan" ref="dianzan" onClick={this.num1_add}></i>
                                            <span >{num1}</span>
                                        </section>
                                        <i className="iconfont icon-pinglun"></i>
                                        <section>
                                            <i className="iconfont icon-shoucang1" onClick={this.num2_add}></i>
                                            <span ref="shoucang">{num2}</span>
                                        </section>
                                        <i className="iconfont icon-shenglve"></i>
                                    </div>
                                </div>
                            )
                        })
                        
                    }
            </div>
        )
    }
}
//timelineList,timelineUser,timelineContents,timelineActivity,timelineActivityUser

{/* <li><img src={item.activity.contents[3].photo_url}/></li>
<li><img src={item.activity.contents[4].photo_url}/></li>
<li><img src={item.activity.contents[5].photo_url}/></li>
<li><img src={item.activity.contents[6].photo_url}/></li>
<li><img src={item.activity.contents[7].photo_url}/></li>
<li><img src={item.activity.contents[8].photo_url}/></li> */}


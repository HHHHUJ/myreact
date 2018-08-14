import React,{Component} from "react";

import {Link} from "react-router";
import Head1 from "../../components/head1"

import {connect} from "react-redux"

import {get_adverts} from "../../actions"
@connect(
    (state)=>({...state})
)
export default class Addetails extends Component{
    componentWillMount(){
        let did = this.props.params.id
        const {dispatch} = this.props;
        dispatch(get_adverts("/album",did,dispatch))
    }
    lookall=(i)=>{
        var dref = `d${i}`;
        this.refs[dref].style.display="block";
        this.refs[dref].style.maxHeight=5000+"px";
    }
    render(){
        const {addetailsList,aditems} = this.props;
        return(
            <div className='addetails'>
                <Head1 word="氢专题"/>
               <div className="addetails-title addetails-common">
                    <h1>{addetailsList.title}</h1>
                    <p>{addetailsList.summary}</p>
               </div>
               <div className="addetails-items">
                    {
                        aditems.map((item,idx)=>{
                            return(
                               <div className="addetails-items" key={idx}>
                                     <div className="addetails-description addetails-common">
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="authorhead">
                                        <Link><img src={item.user_activity.user.photo_url}/></Link>
                                        <span>{item.user_activity.user.name}</span>
                                        <div className="guanzuta">关注他</div>
                                    </div>
                                    <img src={item.user_activity.contents[0].photo_url} className="datu"/>
                                    <div className="imgList swiper-no-swiping">
                                        {
                                            item.user_activity.contents.map((items,idx)=>{
                                                return(
                                                    <img src={items.photo_url} key={idx}/>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="addetails-description2" ref={"d"+idx}>
                                        <h1>{item.user_activity.topic}</h1>
                                        <p>{item.user_activity.description}</p>
                                    </div>
                                    <h3 className="h3" onClick={()=>{this.lookall(idx)}}>查看全文</h3>
                                    <p className="biaoqian">
                                        <span>{item.user_activity.districts[0].name}</span>
                                    </p>
                                    <div className="pinglun">
                                        <section>
                                            <i className="iconfont icon-zan" ref="dianzan"></i>
                                            <span >0</span>
                                        </section>
                                        <i className="iconfont icon-pinglun"></i>
                                        <section>
                                            <i className="iconfont icon-shoucang1"></i>
                                            <span ref="shoucang">0</span>
                                        </section>
                                        <i className="iconfont icon-shenglve"></i>
                                    </div>
                                </div>
                            )
                        })
                    }
               </div>
            </div>
        )
    }
}


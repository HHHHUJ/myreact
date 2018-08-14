import React,{Component} from "react";
import {Link} from "react-router";
// import  ReactSwipe from "../../../../libs/reactswiper"
import { Carousel } from 'antd';//走马灯
import {connect} from "react-redux"

import {get_img,get_nearby,get_v2Destinations} from "../../actions"


@connect(
    (state)=>({...state})
)
export default class Home extends Component{
    componentWillMount(){
            const {dispatch} = this.props;
            dispatch(get_img("/adverts",dispatch))
            dispatch(get_nearby("/nearby",dispatch))
            dispatch(get_v2Destinations("/v2-destinations",dispatch))
    }
    render(){
        const {imgList,nearbyList,destinationsList1,destinationsList2,destinationsList3,destinationsList4,destinationsList5} = this.props;
        return(
            <div className="home">
                <Carousel autoplay>
                    {
                        imgList.map((item,idx)=>{
                            return(
                                <Link className="banner" key={idx} to={'/addetails/'+item.target_id}>
                                    <div className="imgbox">
                                        <img src={item.photo.photo_url}/>
                                    </div>
                                </Link>
                            )
                        })
                    }
                    <a href="http://m.ctrip.com/html5/you/operations/app.html?app=1&popup=close&autoawaken=close">
                        <div className="imgbox">
                            <img src="http://inspiration.chanyouji.cn/Advert/142/b120581c9804c5a42917e11261198296.jpg"/>
                        </div>
                    </a>
                </Carousel>
                <div className="lastwant">
                    <span className="span">最近想去</span>
                    <div className="lastwant-list swiper-no-swiping">
                        <span>北京</span>
                        <span>美国</span>
                        <span>英国</span>
                        <span>非洲</span>
                        <span>日本</span>
                        <span>韩国</span>
                        <span>非洲</span>
                    </div>
                </div>
                <div className="main">
                    <h2>附近目的地</h2>
                    <div className="nearby commondes">
                        {
                            nearbyList.map((item,idx)=>{
                                return (
                                    <Link key={idx} to={'/destinadetails/'+item.id}>
                                        <dl>
                                            <dt><img src={item.photo.url} /></dt>
                                            <dd>{item.name}</dd>
                                            <dd>{item.id-150}公里</dd>
                                        </dl>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <Link className="more">更多附近目的地</Link>
                    <h2>大陆热门目的地</h2>
                    <div className="china commondes">
                        {
                            destinationsList1.map((item,idx)=>{
                                return (
                                    <Link key={idx}>
                                        <dl>
                                            <dt><img src={item.photo.url} /></dt>
                                            <dd>{item.name}</dd>
                                            <dd>{item.name_en}</dd>
                                        </dl>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <Link className="more">20省旅行攻略</Link>
                    <h2>台港澳</h2>
                    <div className="gat commondes">
                        {
                            destinationsList2.map((item,idx)=>{
                                return (
                                    <Link key={idx}>
                                        <dl>
                                            <dt><img src={item.photo.url} /></dt>
                                            <dd>{item.name}</dd>
                                            <dd>{item.name_en}</dd>
                                        </dl>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <h2>亚洲热门目的地</h2>
                    <div className="aria commondes">
                        {
                            destinationsList3.map((item,idx)=>{
                                return (
                                    <Link key={idx}>
                                        <dl>
                                            <dt><img src={item.photo.url} /></dt>
                                            <dd>{item.name}</dd>
                                            <dd>{item.name_en}</dd>
                                        </dl>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <Link className="more">12国旅行攻略</Link>
                    <h2>欧洲热门目的地</h2>
                    <div className="eup commondes">
                        {
                            destinationsList4.map((item,idx)=>{
                                return (
                                    <Link key={idx}>
                                        <dl>
                                            <dt><img src={item.photo.url} /></dt>
                                            <dd>{item.name}</dd>
                                            <dd>{item.name_en}</dd>
                                        </dl>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <Link className="more">8国旅行攻略</Link>
                    <h2>其他热门目的地</h2>
                    <div className="othercountry commondes">
                        {
                            destinationsList5.map((item,idx)=>{
                                return (
                                    <Link key={idx}>
                                        <dl>
                                            <dt><img src={item.photo.url} /></dt>
                                            <dd>{item.name}</dd>
                                            <dd>{item.name_en}</dd>
                                        </dl>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
           
        )
    }
} 


 /* {
                            destinationsList[0].destinations.map((item,idx)=>{
                                return (
                                    <Link key={idx}>
                                        <dl>
                                            <dt><img src={item.photo.url} /></dt>
                                            <dd>{item.name}</dd>
                                            <dd>{item.name_en}</dd>
                                        </dl>
                                    </Link>
                                )
                            })
                        } */

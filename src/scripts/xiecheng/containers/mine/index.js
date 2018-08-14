import React,{Component} from "react";
import {Link} from "react-router";
import {setCookie,getCookie,removeCookie} from "../../../../libs/cookie.js";
import {connect} from "react-redux"
import {get_mineuserinfo,isDisplay} from "../../actions"
import { Menu, Dropdown, Icon } from 'antd';

@connect(
    (state)=>({...state})
)
export default class Mine extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        const {dispatch} = this.props;
        var name = getCookie('username');
        if(name){
            dispatch(isDisplay(dispatch))
            dispatch(get_mineuserinfo("/userinfo",name,dispatch))
        }
    }
    render(){
        const {mineuserinfo,isDisplay} = this.props;
        var classNameString1 = "";
        var classNameString2 = ""
        var mineUrlList = null;
        var Link2 = null;
        if(isDisplay){  //未登录状态
            classNameString1 = "a1"
            classNameString2 = "a2"
            mineUrlList = {lingdang:"/login",
                            shoucang:"/login",
                            setting:"/setting/0"
                        }
            var dingdan = (
                <Link to='/login'>
                    <i className="iconfont icon-miaoshuwenben"></i>
                    <span>我的携程订单</span>
                </Link>
            )
        }else{  //已登录状态
            classNameString1 = "a2"
            classNameString2 = "a1"
            mineUrlList = {lingdang:"/suggestion",
                            shoucang:"/personal",
                            setting:"/setting/1"
                        }
            var dingdan = (
                <Link href='http://m.ctrip.com/webapp/myctrip/orders/allorders'>
                    <i className="iconfont icon-miaoshuwenben"></i>
                    <span>我的携程订单</span>
                </Link>
            )
        }
        
        
         if(mineuserinfo){
            Link2 = (
                <Link to="/personal" ref="alreadyLogin" className={classNameString2}>
                    <i className="iconfont" style={{fontSize:80,color:"#f38181",background:"#9ddcdc"}}>&#xe71c;</i>
                    <span>{mineuserinfo.nickname}</span>
                </Link>
            )
        }
        const menu = (
            <Menu>
              <Menu.Item key="0">
                <Link>我的草稿箱</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link>我的好友</Link>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3">
                <Link>我的携程礼品卡</Link>
              </Menu.Item>
            </Menu>
          );
        return(
            <div className="mine">
                <div className="mine-travel">
                    <h3>我的游记</h3>
                    <div className="loginfield">
                        <Link to="/login" ref="notLogin" className={classNameString1}>
                            <i className="iconfont icon-wode-"></i>
                            <span>未登录</span>
                        </Link>
                        {Link2}
                        <Link className="a3" to={mineUrlList.lingdang}>
                            <i className="iconfont icon-lingdang2"></i>
                        </Link>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Link className="ant-dropdown-link">
                                <i className="iconfont icon-shenglve"></i>
                            </Link>
                        </Dropdown>
                    </div>
                </div>
                <div className="mine-community">
                    <h3>社区</h3>
                    <Link to={mineUrlList.shoucang}>
                        <i className="iconfont icon-shoucang3"></i>
                        <span>我的收藏</span>
                    </Link>
                    {dingdan}
                </div>
                <div className="mine-other mine-community">
                    <h3>其他</h3>
                    <Link to="/opinion">
                        <i className="iconfont icon-yijianfankui1"></i>
                        <span>意见反馈</span>
                    </Link>
                    <Link to={mineUrlList.setting}>
                        <i className="iconfont icon-settings"></i>
                        <span>设置</span>
                    </Link>
                </div>
            </div>
        )
    }
}
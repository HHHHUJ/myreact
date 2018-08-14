import React,{Component} from "react";

import {Link,browserHistory,hashHistory} from "react-router";
import Head1 from "../../components/head1"
import {setCookie,getCookie,removeCookie} from "../../../../libs/cookie.js";
// import "../../../../libs/layer.js"
import {connect} from "react-redux"

import {} from "../../actions"
@connect(
    (state)=>({...state})
)

export default class Addetails extends Component{
    constructor(props){
        super(props)
    }
    handleExit(){
        layer.open({
            title:"提示",
            content: '确认退出当前账户？'
            ,btn: ['退出', '取消']
            ,yes: function(index){
            removeCookie("username");
            location.reload();
            hashHistory.push('/mine')
            layer.close(index);
            }
            ,no:function(index){
                layer.close(index);
            }
          });     
    }
    
    render(){
        var isButton = this.props.params.num;
        var displayStyle = parseInt(isButton)?"block":"none";
        return(
            <div className="setting">
                <Head1 word="设置"/>
                <div className="setting-set">
                    <h1 className="set-head">基本设置</h1>
                    <Link className="set-common">
                        <span>消息推送设置</span>
                        <i className="iconfont icon-gou"></i>
                    </Link>
                    <Link className="set-common">
                        <span>清除缓存</span>
                        <em>约84.5M</em>
                    </Link>
                    <Link className="set-common2"><span>黑科技视频</span></Link>
                    <Link className="set-common2"><span>检查更新</span></Link>
                    <button type="button" className="settingButton commonButton" style={{display:displayStyle}} onClick={this.handleExit} ref="btn">退出登录</button>
                </div>
            </div>
        )
    }
}
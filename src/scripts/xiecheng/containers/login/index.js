import React,{Component} from "react"
import {Link,hashHistory} from "react-router"
import Head1 from "../../components/head1"
import {connect} from "react-redux"
import {loginSubmit,getLoginState} from "../../actions"
import {setCookie,getCookie} from "../../../../libs/cookie.js";
// import "../../../../libs/canvas.js";

@connect(
    (state)=>({...state})
)

export default class Login extends Component{
    constructor(props){
        super(props)
    }
    loginSubmit=()=>{
        const {dispatch} = this.props;
        dispatch(loginSubmit('/login',
        this.refs.username.value,this.refs.password.value,
        dispatch
        ))
       if(!this.refs.username.value){
            this.refs.lable.innerHTML = '请输入手机号码'
            var that = this;
            setTimeout(function(){
                that.refs.lable.innerHTML = ''
            },3000)
       }else if(!this.refs.password.value){
            this.refs.lable.innerHTML = '请输入密码'
            var that = this;
            setTimeout(function(){
                that.refs.lable.innerHTML = ''
            },3000)
       }else if(!/^1[3|4|5|8][0-9]\d{8}$/.test(this.refs.username.value)||!/\w{6,15}/.test(this.refs.password.value)){
            this.refs.lable.innerHTML = '用户名或密码错误'
            var that = this;
            setTimeout(function(){
                that.refs.lable.innerHTML = ''
            },3000)
       }else{
            dispatch(getLoginState(dispatch))
       }
    }
    componentWillMount(){
        const {dispatch} = this.props;
        console.log('cpmponentWillMount')
    }
    focusChange=(event)=>{
        event.target.style.borderBottom="3px solid #3FC1C9";
    }
    blurChange=(event)=>{
        event.target.style.borderBottom="3px solid #676b6a";
    }
    render(){
        const {loginState,regState} = this.props;
        return( 
           <div>
                <Head1 word="登录携程账号"/>
                <div className="login">
                    <div className="form">
                        <input type="text" placeholder="携程注册邮箱或手机号码" ref="username" onFocus={this.focusChange} onBlur={this.blurChange}/>
                        <input type="password" placeholder="密码" ref="password" onFocus={this.focusChange} onBlur={this.blurChange}/>
                        <button type="button" onClick={this.loginSubmit} className="commonButton">登录</button>
                    </div>
                    <p>
                        <span>没有携程账号？</span>
                        <Link to="/register">在此注册</Link>
                        <Link>忘记密码</Link>
                    </p>
                    <lable className="lables" ref="lable"></lable>
                </div>
           </div>
        )
    }
    componentDidUpdate(){
        if(this.props.regState){
            if(this.props.loginState){
                setCookie('username',this.refs.username.value,3600*24*7);
                hashHistory.push('/mine')
            }
        }
    }
}
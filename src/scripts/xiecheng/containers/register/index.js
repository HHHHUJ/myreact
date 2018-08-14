import React,{Component} from "react";
import {Link,hashHistory} from "react-router";
import Head1 from "../../components/head1"
import {connect} from "react-redux"
import {registerSubmit,getRegisterState} from "../../actions"
@connect(
    (state)=>({...state})
)

export default class Login extends Component{
    registerSubmit=()=>{
        const {dispatch} = this.props;
        dispatch(registerSubmit('/register',
        this.refs.username.value,
        this.refs.password.value,
        this.refs.nickname.value,
        dispatch
        ))
       if(!this.refs.username.value){
            this.refs.lable.innerHTML = '请输入手机号码'
            var that = this;
            setTimeout(function(){
                that.refs.lable.innerHTML = ''
            },3000)
       }else if(!this.refs.password.value){
            this.refs.lable.innerHTML = '请填写密码'
            var that = this;
            setTimeout(function(){
                that.refs.lable.innerHTML = ''
            },3000)
       }else if(!this.refs.nickname.value){
            this.refs.lable.innerHTML = '请填写你的昵称'
            var that = this;
            setTimeout(function(){
                that.refs.lable.innerHTML = ''
            },3000)
        }else if(!/^1[3|4|5|8][0-9]\d{8}$/.test(this.refs.username.value)||!/\w{6,15}/.test(this.refs.password.value)){
            this.refs.lable.innerHTML = '手机号码或密码错误'
            var that = this;
            setTimeout(function(){
                that.refs.lable.innerHTML = ''
            },3000)
        }else{
            dispatch(getRegisterState(dispatch))
        }
       
    }
    focusChange=(event)=>{
        event.target.style.borderBottom="3px solid #3FC1C9";
    }
    blurChange=(event)=>{
        event.target.style.borderBottom="3px solid #676b6a";
    }
    render(){
        const {registerState,regState2} = this.props;
        return( 
           <div>
                <Head1 word="注册携程账号"/>
                <div className="login">
                    <div className="form">
                        <input type="text" placeholder="输入手机号" ref="username" onFocus={this.focusChange} onBlur={this.blurChange}/>
                        <input type="text" placeholder="填写你的密码" ref="password" onFocus={this.focusChange} onBlur={this.blurChange}/>
                        <input type="text" placeholder="填写你的昵称" ref="nickname" onFocus={this.focusChange} onBlur={this.blurChange}/>
                        <button type="button" onClick={this.registerSubmit} className="commonButton"><Link>注册</Link></button>
                        <lable className="lables" ref="lable"></lable>
                    </div>
                </div>
           </div>
        )
    }
    componentDidUpdate(){
        const {registerState,regState2} = this.props;
        if(regState2){
            if(this.props.registerState){
                hashHistory.push('/mine')
            }
        }
    }
}
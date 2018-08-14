import axios from "axios";
axios.defaults.baseURL = "http://47.94.153.68:7200";

//获取banner图
export function get_img(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_img",json})
        })
}
//获取搜索信息，不过不能点进详情
export function get_map(url,arg1,dispatch){
    return axios.get(url,{
        params:{
            val:arg1
        }
    })
    .then(res=>{
        return res.data;
    })
    .then(json=>{
        return dispatch({type:"get_map",json})
    })
}


//获取附近目的地
export function get_nearby(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_nearby",json})
        })
}

//获取大陆热门目的地
export function get_v2Destinations(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_v2Destinations",json})
        })
}


//获取登录返回值
export function loginSubmit(url,arg1,arg2,dispatch){
    return axios.get(url,{
        params:{
            username:arg1,
            password:arg2
        }
    })
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"loginSubmit",json})
        })
}

//获取游记
export function get_userinfo(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_userinfo",json})
        })
}

//获取banner图片点击进去的详情页信息

export function get_adverts(url,arg1,dispatch){
    return axios.get(url,{
        params:{
            id:arg1
        }
    })
        .then(res=>{
            return res.data;
            console.log(res.data)
        })
        .then(json=>{
            return dispatch({type:"get_adverts",json})
        })
}

export function get_des(url,arg1,dispatch){
    return axios.get(url,{
        params:{
            id:arg1
        }
    })
        .then(res=>{
            return res.data;
            console.log(res.data)
        })
        .then(json=>{
            return dispatch({type:"get_des",json})
        })
}

//获取登录时正则验证的返回值
export function getLoginState(){
    return {
        type:"getLoginState"
    }
}

//获取注册的信息
export function registerSubmit(url,arg1,arg2,arg3,dispatch){
    return axios.get(url,{
        params:{
            username:arg1,
            password:arg2,
            nickname:arg3
        }
    })
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"registerSubmit",json})
        })
}
//获取注册时正则验证的返回值
export function getRegisterState(){
    return {
        type:"getRegisterState"
    }
}

//得到userinfo的信息
export function get_mineuserinfo(url,arg1,dispatch){
    return axios.get(url,{
        params:{
            tel:arg1
        }
    })
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_mineuserinfo",json})
        })
}

//mine页面控制元素的显示隐藏
export function isDisplay(){
    return {
        type:"isDisplay"
    }
}

//得到distance组件的信息列表
export function get_distance(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_distance",json})
        })
}

//layout 控制initailSlider
// export function getShowIndex(arg,dispatch){
//     return {
//         type:"getShowIndex",
//         data:arg
//     }
// }
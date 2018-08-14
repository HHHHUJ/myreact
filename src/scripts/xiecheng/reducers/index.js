var initState = {
    headList:[
        {url:"/home",txt:"攻略",icon:"icon-home1"},
        {url:"/travel",txt:"游记",icon:"icon-tupian"},
        {url:"/distance",txt:"行程单",icon:"icon-mudedi2"},
        {url:"/mine",txt:"我的",icon:"icon-wode-"}
    ],
    imgList:[],
    nearbyList:[],
    destinationsList1:[],
    destinationsList2:[],
    destinationsList3:[],
    destinationsList4:[],
    destinationsList5:[],
    loginState:"",
    regState:false,
    registerState:"",
    regState2:false,
    timelineList:[],
    addetailsList:[],
    aditems:[],
    desList:[],
    showIndex:0,
    mineuserinfo:[],
    isDisplay:true,
    distanceList:[],
    distanceList1:[],
    searchList:[]
}

export default (state=initState,action)=>{
    switch(action.type){
        case "get_img":
            state.imgList = action.json;
            return Object.assign({},state);
        case "get_nearby":
            state.nearbyList = action.json;
            return Object.assign({},state);
        case "get_v2Destinations":
            state.destinationsList1 = action.json[0].destinations;
            state.destinationsList2 = action.json[1].destinations;
            state.destinationsList3 = action.json[2].destinations;
            state.destinationsList4 = action.json[3].destinations;
            state.destinationsList5 = action.json[4].destinations;
            return Object.assign({},state);
        case "loginSubmit":
            state.loginState = action.json;
            return Object.assign({},state);
        case "getLoginState":
            state.regState = true;
            return {...state} 
        case "registerSubmit":
            state.registerState = action.json;
            console.log(action.json)
            return Object.assign({},state);
        case "getRegisterState":
            state.regState2 = true;
            return {...state} 
        case "get_userinfo":
            state.timelineList = action.json;
            return {...state}
        case "get_adverts":
            state.addetailsList = action.json[0];
            state.aditems = action.json[0].items;
            return {...state}  
        case "get_des":
            state.desList = action.json[0];
            return {...state}  
        case "get_mineuserinfo":
            state.mineuserinfo = action.json[0];
            return {...state}
        case "isDisplay":
            state.isDisplay = false;
            return {...state}
        case "get_distance":
            state.distanceList = action.json[0];
            state.distanceList1 = action.json[0].items;
            return {...state}
        case "get_map":
            state.searchList = action.json;
            return {...state}
        default:
            return {...state}
    }
}
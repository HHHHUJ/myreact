react  框架 
组件化开发的原生js的框架 


极速渲染能力  虚拟dom virture dom 
高度组件模块化   组件之间可以复用 
(稳定性 经过大量测试)

适用于 逻辑较为复杂的大型应用项目    
MIT  协议   公平公开公正



react  和   vue    对比  
相同 
a.  react 和 vue 都有组件  都使用  虚拟dom  (virtual dom)
b.  vue  和  react  都提供了 组件化的视图(composible),  响应式概念 
c.  react  和  vue  都有核心渲染组件的 api , 创建组件 api库, 完整框架的生态圈, 遵循路由匹配规则,各种状态管理机制(react-redux/vuex)

不同
a.  react 用jsx (app.jsx) 来编写组件 javascript xml 来渲染页面  vue 用 template 来编写组件模板
b.  vue 较react 有更快的渲染组件的能力  ,react 比 vue 开发周期长,运行速度慢
c.  vue 和  react 都有各自不同的生命周期钩子函数  运动钩子函数   



react  特点
1.虚拟dom (开发时候不需要在页面中写任何dom元素) victure dom
2.jsx语法(写页面时候使用javascript xml格式的语法)
3.组件化开发(react最核心的思想是将页面中任何一个区域或者元素都
看成是一个组件 Component)
4.单向数据流(组件和后端之间的数据是单向的，从后端流动到react组件中)
5.组件生命周期(任何一个组件在dom中都具有一个完整的声明周期，组件初始化的时候开始，组件被移除的时候消失，从而保证性能的优越) 


虚拟dom  
虚拟DOM则是在DOM的基础上建立了一个抽象层，
我们对数据和状态所做的任何改动，都会被自动且高效的同步到虚拟DOM，最后再批量同步到DOM中

db.test（复制源表）.find().forEach(function(x){
    db.target（目的表）.insert(x);
})
https://motion.ant.design/components/tween-one#components-tween-one-demo-position

// // 1.必须通过 constructor super(props)  传入 props
// // 2.由于是用ES6 class语法创建组件，其内部只允许定义方法，而不能定义属性，
// // class的属性只能定义在class之外。所以propTypes要写在组件外部。
// // 3.对于之前的getDefaultProps方法，由于props不可变，所以现在被定义为一个属性，
// // 和propTypes一样，要定义在class外部。


// // 使用ES6 class语法创建组件， class中的方法不会自动将this绑定到实例中 此时this 为null
// // 必须使用 .bind(this)或者 箭头函数 ＝>来进行手动绑定
// // this.handleclick.bind(this)
// // 箭头函数 来保存this
// // ES6 语法不支持 混合函数  mixins

react project website:
1.banner:
    http://q.chanyouji.com/api/v1/adverts.json?market=vivo&first_launch=false

    跨越北极圈：http://q.chanyouji.com/api/v1/albums/98.json
    其他的按advert_type  跟target_id找

2.  大陆热门目的地：http://q.chanyouji.com/api/v2/destinations.json
    附近目的地：http://q.chanyouji.com/api/v2/destinations/nearby.json?lat=30.614106&lng=104.079547&recommend
    地址详情：http://q.chanyouji.com/api/v3/destinations/167.json
    http://q.chanyouji.com/api/v3/destinations/109.json

3.游记
    http://q.chanyouji.com/api/v1/timelines.json?page=1
    详情：http://q.chanyouji.com/api/v1/users/3206/user_activities.json?parent_district_id=100008&page=1
    3206：用户id          区域id：parent_district_id=100008
4.distance 行程
    http://q.chanyouji.com/api/v1/albums/37.json //一键生成行程

5.通过id找地区  search
    http://q.chanyouji.com/api/v2/search.json?search_type=hint&q=a //通过id找地区
    http://q.chanyouji.com/api/v2/search.json?search_type=hint&q=%E7%BE%8E%E5%9B%BD
跳转方法：
        browserHistory.push("/list")   //browserHistory
        // hashHistory.push("/list")   //hashHistory
        console.log(this.context.router);
        // this.context.router.push("/list")  context
        // this.context.router.go(-1)
        // this.context.router.goBack()
        console.log(this.props.router)
        // this.props.router.push("/list")
        this.props.router.go(-1);


var html =null;
        if(recommend1.length>0){
            html=(
                <div>
                <Carousel>
                    {
                        recommend1.map((it,id)=>{
                                return (
                                    <div key={id} >
                                    <img src={it.worksPic}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                    <p>{recommend1[0].name}</p>
                    <p>敷衍社|北京</p>
                    <p>2017.11.18-12.14</p>
                </div>
            )
        }


实现横向滚动
 .slide-box{
    margin-top: 200px;
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling:touch;
}
img{
    display: block;
    width: 200px;
    height: 200px;
    border:1px solid #ccc;
    margin-right: 30px;
}


在swiper-slider div里面的某一元素加一个swiper-no-swiping类名就可以阻止swiper滑动


<div id="cont" className="arti" dangerouslySetInnerHTML={{__html:recdetail.artContent}}></div>




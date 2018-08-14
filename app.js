
var app = require('express')();
var server = require('http').createServer(app);
var conn = require('./conn')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var async = require("async")
var host = "localhost";//172.17.113.101
var port = "7200"


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//解决跨域
app.all('*',function(req,res,next){
    // res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next()
});
/*###############################搜索数据######################################*/


app.get('/search',(req,res)=>{
    var vals = req.query.val;
    console.log(vals)
    if(vals == ""){
        res.send([])
    }else{
        var info = new RegExp(vals);
        console.log(info)
        conn.getDb((err,db)=>{
          if(err) throw err;
          var coll = db.collection('search_map');
          coll.find(
            {$or:[{id:{$regex: info, $options: 'ixm' }},
            {name:{$regex: info, $options: 'ixm' }},
            {q:{$regex: info, $options: 'ixm' }},
            ]},{_id:0}
          ).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
          })
        })
    }
    
})
  

/*###############################攻略版块数据######################################*/
app.get('/nearby',(req,res)=>{
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection('nearby');
        coll.find({}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})
app.get('/adverts',(req,res)=>{
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection('adverts');
        coll.find({}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})
app.get('/v2-destinations',(req,res)=>{
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection('v2-destinations');
        coll.find({}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})

app.get('/album',(req,res)=>{
    var id = req.query.id*1;
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection('album');
        coll.find({id:id},{_id:0}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})

app.get('/v3-destinations',(req,res)=>{
    var id = req.query.id*1;
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection('v3-destinations');
        coll.find({id:id},{_id:0}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})
/*###############################游记版块数据######################################*/
app.get('/timelines',(req,res)=>{
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection('timelines');
        coll.find({}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})

/*###############################行程板块数据######################################*/
app.get('/distance',(req,res)=>{
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection('distance');
        coll.find({}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})


/*##################################我的mine板块######################################*/
app.get('/userinfo',(req,res)=>{
    var tel = req.query.tel
    console.log(tel)
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection('userinfo');
        coll.find({username:tel},{_id:0}).toArray((err,result)=>{
            if(err) throw err;
            console.log(result)
            res.send(result)
        })
    })
})

/*##################################登录注册######################################*/

app.get('/register',(req,res)=>{
    var user = req.query.username;
    var pass = req.query.password;
    var nickname = req.query.nickname;
    var uid = parseInt(Math.random()*10000+1)
    var findData = function(db,callback){
        var info = db.collection("userinfo");
        async.waterfall([
            function(callback){
                info.find({username:user},{_id:0}).toArray((err,result)=>{
                    if(err) throw err;
                    console.log("###############")
                    console.log(result);
                    var len = result.length;
                    if(len>=0){
                        callback(null,true);//不能注册
                    }else{
                        callback(null,false)
                    }
                })
            },
            function(arg,callback){
                if(arg){
                    callback(null,0)//不能注册
                }else{
                    info.insert({username:user,password:pass,nickname:nickname,id:uid},(err,result)=>{
                        if(err) throw err;
                        callback(null,1)
                    })
                }
            }
        ],function(err,result){
            callback(result)
        })
    }
    conn.getDb((err,db)=>{
        if(err) throw err;
        findData(db,(result)=>{
            if(result=='1'){
                res.send('1')//可以注册
            }else{
                res.send('0')
            }
        })
    })
});

app.get("/login",(req,res)=>{
    var user = req.query.username;
    var pass=  req.query.password;
    console.log("###################")
    console.log(user)
    console.log(pass)
    var findData = function(db,callback){
        var collection = db.collection("userinfo");
        collection.find({username:user,password:pass}).toArray((err,result)=>{
          if(err) throw err;
          callback(result);
        })
      }
    conn.getDb((err,db)=>{
        if(err) throw err;
        findData(db,function(result){
            if(result.length>0){
                res.send("1")  //登录成功
            }else{
                res.send("0")
            }
        })   
    }) 
});



server.listen(port,host,()=>{
    console.log(`the server is running at ${host}:${port}`)
})
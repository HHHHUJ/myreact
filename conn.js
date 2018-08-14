//封装连接数据库
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var CONN_DB_STR = "mongodb://47.94.153.68:27017/myreact";

module.exports = {
    getDb:function(callback){
        MongoClient.connect(CONN_DB_STR,(err,db)=>{
            if(err){
                console.log('访问失败')
                callback(err,null);
            }else{
                console.log('访问成功')
                callback(null,db);
            }
        })
    }
}
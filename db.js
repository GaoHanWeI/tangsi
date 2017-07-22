var mysql = require('mysql');
var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'onl'
	
});



function myquery(sql, callback) {
	pool.getConnection(function(err, connection) { //从连接池提取链接
		connection.query(sql, function(err, rows) { //通过query方法统一执行增删改查的操作	
		callback(err, rows)
			connection.release() //释放连接
		})
	})
}

exports.myquery = myquery;   //抛出
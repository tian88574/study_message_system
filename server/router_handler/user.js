/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
// 登录请求的处理函数
const db = require('../db/index')
// 测试连接
db.connect(err=>{
  console.log(err,'如果为null 就是连接成功');
})
exports.login = (req, res) => {
res.send('login OK')
}
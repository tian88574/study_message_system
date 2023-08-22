// 导入 express 模块 
const express = require('express') 
// 创建 express 的服务器实例 
const app = express()
// 之后的其他配置都写在这里 ​ 

// 导入 cors 中间件 
const cors = require('cors') 

// 将 cors 注册为全局中间件，允许跨域请求 
app.use(cors())
app.use(express.urlencoded({ extended: false }))

// 导入并注册用户路由模块
const userRouter = require('./router/user')

app.use('/api', userRouter)

// 调用 app.listen 方法，指定端口号并启动web服务器 
app.listen(8888, function () {   
console.log('server is running at http://127.0.0.1:8888') 
})
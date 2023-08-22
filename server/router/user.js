const express = require('express') 
const router = express.Router() 

// 导入用户路由处理函数模块 
const userHandler = require('../router_handler/user') 
// 处理登录请求的映射关系 
router.post('/login', userHandler.login) 

module.exports = router
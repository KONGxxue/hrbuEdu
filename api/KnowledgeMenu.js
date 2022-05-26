const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const config = require("../config/config")

// 知识点目录维护接口 /api/know/knowledgemenu
router.get("/knowledgemenu", (req, res) => {

    const params = req.query;
    console.log(params);
    // 连接数据库，匹配用户名与密码
    const db = mysql.createPool(config)
    // 查询用户表
    const sql = `SELECT Kname,catalog FROM catalogmaintain;`;
    console.log(sql);
    db.query(sql, (err, results) => {
        if (err) return console.log(err.message);
        if (results.length) {
            res.send({
                state: 1,
                message: "查询成功",
                data: results
            })
        } else {
            res.send({
                state: 0,
                message: "查询失败",
            })

        }
    });
    
})



module.exports = router
const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const config = require("../config/config")

// 获取知识点 /api/know/knowledgemenu
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
            return res.send({
                state: 1,
                message: "查询成功",
                data: results
            })
        } else {
            return res.send({
                state: 0,
                message: "查询失败",
            })
        }
    })
    //知识点总数接口
    router.get("/knowledgetotal", (req, res) => {

        const params = req.query;
        console.log(params);
        // 连接数据库，匹配用户名与密码
        const db = mysql.createPool(config)
    const sql = `SELECT COUNT(Kid) AS total FROM catalogmaintain `;
    let total;
    db.query(sql, (err, results1) => {
        console.log(results1[0].total);
        console.log(total);
        total = results1[0].total

        return res.send({
            state: 1, // 查询成功
            message: "查询成功",
            data: {
                results1,
                total
            }
        })
    })
})
})
module.exports = router
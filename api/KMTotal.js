const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const config = require("../config/config")

// 知识点目录维护接口 /api/kmtotal/kmtotal
router.get("/kmtotal", (req, res) => {

    const params = req.query;
    console.log(params);
    // 连接数据库，匹配用户名与密码
    const db = mysql.createPool(config)
    // 查询用户表
    const sql = `SELECT COUNT(Kid) AS total FROM catalogmaintain}`;
    let total;
    db.query(sql, (err, results1) => {
        console.log(results1[0].total);
        console.log(total);
        total = results1[0].total

        res.send({
            state: 1, // 查询成功
            message: "查询成功",
            data: {
                results,
                total
            }
        });

    })

})

module.exports = router
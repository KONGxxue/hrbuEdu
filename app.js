const express = require("express")
const app = express();
const port = 3000;

const systemuser = require("./api/SystemUserPost.js")
const user = require("./api/User.js")
const know = require("./api/KnowledgeMenu.js")
const uuid = require("uuid");

// 对post请求的表单数据进行接受处理
app.use(express.urlencoded({
    extended: false
}));
// 对post请求的JSON数据进行接受处理
app.use(express.json());

app.use("/system/user", systemuser)
app.use("/user", user)
app.use("/know", know)
app.get("/aaa", (req, res) => {
    console.log(uuid.v4().replaceAll("-",""));
    console.log(uuid.v4().replaceAll("-",""));
    console.log(uuid.v4().replaceAll("-",""));
    console.log(uuid.v4().replaceAll("-",""));
    console.log(uuid.v4().replaceAll("-",""));
    console.log(uuid.v4().replaceAll("-",""));
    res.send({
        state: 1,
        message: "登录成功"
    })
})

app.listen(port, () => {
    console.log(`服务启动成功，端口号为${port}`);
})
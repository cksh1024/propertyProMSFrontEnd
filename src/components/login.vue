<template>
    <div class="bg">
        <h1 class="title">房地产项目设计流程管理系统</h1>
        <div class="container">
            <div class="login" @keydown.enter="login">
                <h2 style="margin-top: 10px">登录</h2>
                <el-form>
                    <el-form-item>
                        <el-input class="login_input" placeholder="请输入账号" v-model="username"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input class="login_input" placeholder="请输入密码" v-model="password" type="password"></el-input>
                    </el-form-item>
                </el-form>
                <el-button type="primary" round style="width: 150px" @click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import axios from 'axios'
export default {
    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login () {
            let param = new FormData()
            param.append('username', this.username)
            param.append('password', this.password)
            axios.post('lclgl/login', param)
            .then(res => {
                if (res.data.status === -1) {
                    return this.$message.error(res.data.msg)
                }
                let staffInfo = {
                    statusType: res.data.statusType,
                    type: res.data.type
                }
                this.setStaffInfo(staffInfo)
                sessionStorage.setItem('staffInfo', JSON.stringify(staffInfo))
                this.$router.push(`/${res.data.type}`)
            })
            .catch(err => {
                console.log(err)
            })
        },
        ...mapActions(['setStaffInfo'])
    }
}
</script>

<style>
    .title {
        font-size:50px;
        margin-top: 0;
        position: relative;
        top: 40px;
    }
    .container {
        max-width: 500px;
        margin: 200px auto;
        border: 1px solid black;
        border-radius: 15px;
        overflow: hidden;
        position: relative;
    }
    .login {
        width: 80%;
        float: right;
        padding: 50px;
        padding-top: 30px;
        color: rgb(255, 255, 255);
        background-color: rgba(255, 255, 255, .5);
        color: black;
    }
    .login_input .el-input__inner {
        border-radius: 30px;
        font-size: 15px;
        padding: 25px 20px;
    }
    .bg {
        height: 100%;
        background: url('../../static/imgs/background2.jpg');
    }
</style>

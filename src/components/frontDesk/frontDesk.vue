<template>
    <el-container style="height: 100%; border: 1px solid #eee">
        <div class="menu">
            <el-menu
            default-active="/frontDesk/selectStaff"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            style="height:100%"
            router>
                <div class = "logo">
                    <img alt="logo" src="../../../static/imgs/logo.png" class="logo">
                </div>
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-price-tag"></i>
                    <span class="title1">前台</span>
                    </template>
                    <el-submenu index="2-3">
                        <template slot="title"><i class="el-icon-user"></i><span class="title2">员工</span></template>
                        <el-menu-item index="/frontDesk/selectStaff">信息管理</el-menu-item>
                        <el-menu-item index="/frontDesk/addStaff">添加</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2-4">
                        <template slot="title"><i class="el-icon-s-custom"></i><span class="title2">客户</span></template>
                        <el-menu-item index="/frontDesk/selectClient">信息管理</el-menu-item>
                        <el-menu-item index="/frontDesk/addClient">添加</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </div>
        <div class="main">
            <div class="top-bar">
                <Header/>
            </div>
            <div class="mainview">
                <router-view/>
            </div>
        </div>
    </el-container>
</template>

<script>
import Header from '../commons/header'
export default {
    data () {
        return {
            circleUrl: 'https://img3.duitang.com/uploads/item/201604/17/20160417164702_Wr45v.thumb.700_0.jpeg'
        }
    },
    components: {
        Header
    }
}
</script>

<style>
/* .el-submenu__title .title1 {
    font-size: 35px;
}
.el-submenu__title .title2 {
    font-size: 20px;
}
.el-menu-item {
    font-size: 15px;
}
.el-menu-item-group__title {
    font-size: 20px;
} */
.el-avatar>img {
    position: relative;
    left: -19px;
    top: 0px;
}
.menu {
    position: fixed;
    top: 0;
    left: 0;
}
</style>

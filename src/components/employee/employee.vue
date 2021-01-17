<template>
  
  <el-container style="height: 920px; border: 1px solid #eee">
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div class="logo">
        <img alt="logo" src="../../../static/imgs/logo.png" class="logo">
      </div>

      <router-link to="/employee/homepage">
      <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">我的主页</span>
      </el-menu-item>
      </router-link>

        <el-submenu  index="2">
        <template slot="title">
        <i class="el-icon-user"></i>
        <span slot="title">我的项目</span>
        </template>
        <el-menu-item-group>
        <router-link to="/employee/present">
        <el-menu-item index="2-1">当前项目</el-menu-item>
        </router-link>
        <router-link to="/employee/finished">
        <el-menu-item index="2-2">已完成项目</el-menu-item>
        </router-link>
        <router-link to="/employee/audit">
        <el-menu-item index="2-3">项目审核</el-menu-item>
        </router-link>
        <router-link to="/employee/file">
          <el-menu-item index="2-4">文件下载</el-menu-item>
          </router-link>
          <router-link to="/employee/client">
            <el-menu-item index="2-5">客户信息</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>

  </el-menu>
  
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

<script >
import Header from '../commons/header'
export default {
  data () {
    return {

    }
  },
  components: {
    Header
  }
}
</script>

<style>
.el-aside {
    color: #333;
}

.el-menu-vertical-demo{
    width: 200px;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}

.box{
    position: absolute;
    padding: 50px 50px;
    margin: 80px 200px;
    color: #000;
    width: 1600px;
    height: 740px;
}
</style>

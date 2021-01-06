<template>
<el-container style="height: 100%; border: 1px solid #eee">
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div class = "logo">
        <img alt="logo" src="./picture/logo.png" class="logo">
      </div>

      <router-link to="/main">
      <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">主页</span>
      </el-menu-item>
      </router-link>

      <el-submenu  index="2">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span slot="title">员工管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/E_information">
            <el-menu-item index="2-1">员工基本信息</el-menu-item>
          </router-link>
          <router-link to="/E_team">
            <el-menu-item index="2-2">团队管理</el-menu-item>
          </router-link>
          <router-link to="/E_monitor">
            <el-menu-item index="2-3">员工评级</el-menu-item>
          </router-link>
          <router-link to="/E_state">
            <el-menu-item index="2-4">员工状态监测</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title">项目管理</span>
        </template>
        <el-menu-item-group>
          <router-link to="/P_information">
            <el-menu-item index="3-1">项目基本信息</el-menu-item>
          </router-link>
          <router-link to="/P_journal">
            <el-menu-item index="3-2">项目日志</el-menu-item>
          </router-link>
          <router-link to="/P_stage">
            <el-menu-item index="3-3">项目阶段信息</el-menu-item>
          </router-link>
          <router-link to="/client">
            <el-menu-item index="3-4">客户信息</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>

      <router-link to="/S_information">
      <el-menu-item index="4">
        <template slot="title">
          <i class="el-icon-coin"></i>
          <span>工资管理</span>
        </template>
      </el-menu-item>
      </router-link>
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

<script type="module">
import Header from '../commons/header.vue'

export default {
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

.logo{
  width: 120px;
  margin: auto;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>

<template>
    <el-header style="text-align: right; font-size: 1px ; height: 80px;width:100%;">
           <span class="time">{{ date }}</span>
            <i class="el-icon-s-comment"></i>
        <el-dropdown>
        <p>
            <img class="person" alt="person" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" style="margin-right: 20px">
            {{name}}
        </p>

        <el-dropdown-menu slot="dropdown">
            <router-link to="/manager/P_center">
                <el-dropdown-item>个人中心</el-dropdown-item>
            </router-link>
            <router-link to="/manager/password">
          <el-dropdown-item>修改密码</el-dropdown-item>
          </router-link>
          <router-link to='/'>
          <el-dropdown-item>注销</el-dropdown-item>
          </router-link>
        </el-dropdown-menu>
        </el-dropdown>
    </el-header>

</template>

<script>
export default{
  data () {
    return {
      name: '老王',
      time: '',
      date: ''
    }
  },
  mounted () {
    this.Timer()
  },
  methods: {
    Timer () {
      var timerID = setInterval(this.updateTime, 1000)
      this.updateTime()
      return timerID
    },
    updateTime () {
      var cd = new Date()
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
      this.date = this.zeroPadding(cd.getFullYear(), 4) + '/' + this.zeroPadding(cd.getMonth() + 1, 2) + '/' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.time
    },
    zeroPadding (num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  }
}
</script>

<style>
.el-header {
    background-color: #B3C0D1;
    line-height: 50px;
    width: 89.4%;
}
.el-aside {
    color: #333;
}
.el-menu-vertical-demo{
    width: 200px;
}
.el-icon-setting el-dropdown-selfdefine{
  margin-top: 20px;
}
.person{
  margin: 5px;
  width:45px;
  border-radius: 30px;
}
img.person
{
    vertical-align:middle;
}
.el-icon-s-comment
{
    font-size: 30px;
    padding: 0px 40px 0px 0px;
}
.el-icon-edit
{
    font-size: 30px;
    padding: 0px 40px 0px 0px;
}
.el-icon-share
{
    font-size: 30px;
    padding: 0px 40px 0px 0px;
}
.el-icon-delete
{
    font-size: 30px;
    padding: 0px 150px 0px 0px;
}
.scs{
    margin-right:1070px;
}
.el-icon-s-fold{
    font-size: 30px;
}
.time{
    font-size: 20px;
    padding: 0px 150px 0px 0px;
}
</style>

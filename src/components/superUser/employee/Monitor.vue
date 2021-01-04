<template>
<div>
    <h2>当月员工评级</h2>
    <el-button type="primary" round>修改当月评级</el-button>
    <router-link to='/E_hismonitor'>
    <el-button type="primary" round>查看往月评级</el-button>
    </router-link>
    <el-row :gutter="20">
      <el-col
      :span="3"
      v-for="(item, index) in staff_evaluate"
      :key="index"
      style="margin-top: 10px">
        <el-card shadow="hover">
          <div slot="header" align="center">
            {{item.user_name}}
          </div>
          <div align="center">
            <div class="block">
                <span class="demonstration">员工评级</span>
                <el-rate
                v-model="item.value"
                :colors="item.colors">
                </el-rate>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    
</div>
</template>

<script>
export default {
  data () {
    return {
      staff_evaluate: [{
        user_id: 2020001,
        user_name: '史蒂夫',
        value: 5,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']
      },
      {
        user_id: 2020002,
        user_name: '王小美',
        value: 3,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']
      }],
      value: 4
    }
  }
}
</script>

<style>

</style>

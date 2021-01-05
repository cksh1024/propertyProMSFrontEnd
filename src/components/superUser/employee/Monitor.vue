<template>
<div>
    <h2>当月员工评级</h2>
    <el-button type="primary" round @click="updateMonitor">修改当月评级</el-button>
    <router-link to='/E_hismonitor'>
    <el-button type="primary" round>查看往月评级</el-button>
    </router-link>
    <el-row :gutter="20">
      <el-col
      :span="3"
      v-for="(item, index) in staffEvaluate"
      :key="index"
      style="margin-top: 10px">
        <el-card shadow="hover">
          <div slot="header" align="center">
            {{item.userName}}
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
import axios from 'axios'
export default {
  data () {
    return {
      staffEvaluate: [{
        userId: 2020001,
        userName: '史蒂夫',
        value: 5,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']
      },
      {
        userId: 2020002,
        userName: '王小美',
        value: 3,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']
      }]
    }
  },
  methods: {
    getStaffs () {
      axios.post('lclgl/getStaffEvaluate')
      .then(res => {
        for (let index in res.data.staffEvaluate) {
          res.data.staffEvaluate[index].colors = ['#99A9BF', '#F7BA2A', '#FF9900']
        }
        this.staffEvaluate = res.data.staffEvaluate
      })
      .catch(err => {
        console.log(err)
      })
    },
    updateMonitor () {
      let params = new FormData()
      let staffEvaluate = []
      for (let index in this.staffEvaluate) {
        let sv = {
          userId: this.staffEvaluate[index].userId,
          gradeLevel: this.staffEvaluate[index].value,
          gradeTime: '2020-12-31'
        }
        staffEvaluate.push(sv)
      }
      params.append('staffEvaluate', JSON.stringify(staffEvaluate))
      axios.post('lclgl/setStaffEvaluate', params)
      .then(res => {
        if (res.data.status !== 1) {
          return this.$message.error('修改失败！')
        }
        this.$message({
            message: '修改成功！',
            type: 'success'
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getStaffs()
  }
}
</script>

<style>

</style>

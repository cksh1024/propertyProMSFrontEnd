<template>
  <div>
    <h2>历史评级</h2>
    <router-link to='/E_monitor'>
    <el-button type="primary" round>返回修改当月评级</el-button>
    </router-link>
    <el-table
    :data="grade"
    stripe
    style="width: 100%">
    <el-table-column
      prop="userId"
      label="员工编号"
      width="200">
    </el-table-column>
    <el-table-column
      prop="userName"
      label="员工姓名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="gradeTime"
      label="评级日期"
      :filters="[{ text: '2020-1-31', value: '2020-1-31' }, { text: '2020-2-29', value: '2020-2-29' },{ text: '2020-3-1', value: '2020-3-1' }
      ,{ text: '2020-4-1', value: '2020-4-1' },{ text: '2020-5-1', value: '2020-5-1' },{ text: '2020-6-1', value: '2020-6-1' },{ text: '2020-7-1', value: '2020-7-1' }
      ,{ text: '2020-8-1', value: '2020-8-1' },{ text: '2020-9-1', value: '2020-9-1' },{ text: '2020-10-1', value: '2020-10-1' },{ text: '2020-11-1', value: '2020-11-1' }
      ,{ text: '2020-12-1', value: '2020-12-1' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
      width="200">
    </el-table-column>
    <el-table-column
      prop="gradeLevel"
      label="评级等级">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      grade: [{
          userId: 2020001,
          userName: '史蒂夫',
          gradeTime: '2020-1-1',
          gradeLevel: 5
      }]
    }
  },
  methods: {
    getStaffs () {
      axios.post('lclgl/getHistoryStaffEvaluate')
      .then(res => {
        for (let index in res.data.gradeInfos) {
          res.data.gradeInfos[index].colors = ['#99A9BF', '#F7BA2A', '#FF9900']
        }
        this.grade = res.data.gradeInfos
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

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
      :filters="[{ text: '2020-01-31', value: '2020-01-31' }, { text: '2020-02-29', value: '2020-02-29' },{ text: '2020-03-31', value: '2020-03-31' }
      ,{ text: '2020-04-30', value: '2020-04-30' },{ text: '2020-05-31', value: '2020-05-31' },{ text: '2020-06-30', value: '2020-06-30' },{ text: '2020-07-31', value: '2020-07-31' }
      ,{ text: '2020-08-31', value: '2020-08-31' },{ text: '2020-09-30', value: '2020-09-30' },{ text: '2020-10-31', value: '2020-10-31' },{ text: '2020-11-30', value: '2020-11-30' }
      ,{ text: '2020-12-31', value: '2020-12-31' }]"
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
          res.data.gradeInfos[index].gradeTime = this.changeDateFormat(res.data.gradeInfos[index].gradeTime)
        }
        this.grade = res.data.gradeInfos
      })
      .catch(err => {
        console.log(err)
      })
    },
    changeDateFormat (cellval) {
        if (cellval) {
            var date = new Date(cellval)
            var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
            var currentDate = date.getDate()
            currentDate = currentDate < 10 ? '0' + currentDate : currentDate
            return date.getFullYear() + '-' + month + '-' + currentDate
        }
        return ''
    },
    filterTag (value, row) {
      return row.gradeTime === value
    }
  },
  mounted () {
    this.getStaffs()
  }
}
</script>

<style>

</style>

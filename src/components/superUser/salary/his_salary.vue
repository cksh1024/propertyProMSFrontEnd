<template>
<div>
    <router-link to="/S_information">
  <el-button type="primary" round>查看当月工资</el-button>
  </router-link>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="员工编号">
            <span>{{ props.row.userID }}</span>
          </el-form-item>
          <el-form-item label="员工姓名">
            <span>{{ props.row.userName }}</span>
          </el-form-item>
          <el-form-item label="发放时间">
            <span>{{ props.row.salaryTime }}</span>
          </el-form-item>
          <el-form-item label="基本工资">
            <span>{{ props.row.statusSalary }}</span>
          </el-form-item>
          <el-form-item label="上班天数">
            <span>{{ props.row.salaryDays }}</span>
          </el-form-item>
          <el-form-item label="全勤奖奖金">
            <span>{{ props.row.salaryBonus }}</span>
          </el-form-item>
          <el-form-item label="绩效奖金">
            <span>{{ props.row.salaryAll }}</span>
          </el-form-item>
          <el-form-item label="个人奖金">
            <span>{{ props.row.salaryPersonal }}</span>
          </el-form-item>
          <el-form-item label="税额">
            <span>{{ props.row.salaryTax }}</span>
          </el-form-item>
          <el-form-item label="总发放工资">
            <span>{{ props.row.salaryPractical }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="员工姓名"
      prop="userName">
    </el-table-column>
    <el-table-column
      label="工资发放时间"
      prop="salaryTime">
    </el-table-column>
    <el-table-column
      label="发放工资"
      prop="salaryPractical">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      tableData: [{
        userID: 2020001,
        userName: '小王',
        salaryTime: '2020-12-10',
        statusSalary: 6000,
        salaryPractical: 6000,
        salaryDays: 20,
        salaryBonus: 1000,
        salaryAll: 50,
        salaryTax: 100,
        salaryPersonal: 1000
      }]
    }
  },
  methods: {
    getSalarys () {
      axios.post('lclgl/getSalarys')
      .then(res => {
        this.tableData = res.data.salaryInfos
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getSalarys()
  }
}
</script>

<style>

</style>

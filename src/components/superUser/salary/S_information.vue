<template>
<div>
  <router-link to="/his_salary">
  <el-button type="primary" round>查看往月工资</el-button>
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
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button type="warning" @click="setSalary(scope.row)">确认</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default{
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
    setSalary (row) {
      let params = new FormData()
      params.append('staffId', row.userID)
      params.append('salaryTime', row.salaryTime)
      params.append('salaryDays', row.salaryDays)
      params.append('salaryPractical', row.salaryPractical)
      params.append('salaryBonus', row.salaryBonus)
      params.append('salaryAll', row.salaryAll)
      params.append('salaryTax', row.salaryTax)
      params.append('salaryPersonal', row.salaryPersonal)
      axios.post('lclgl/setSalaryInfo', params)
      .then(res => {
        if (res.status === -1) {
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
    },
    getSalaryInfo () {
      axios.post('lclgl/getSalaryInfo')
      .then(res => {
        this.tableData = res.data.salaryInfo
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getSalaryInfo()
  }
}
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

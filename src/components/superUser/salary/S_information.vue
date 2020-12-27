<template>
     <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="员工编号">
            <span>{{ props.row.user_ID }}</span>
          </el-form-item>
          <el-form-item label="员工姓名">
            <span>{{ props.row.user_name }}</span>
          </el-form-item>
          <el-form-item label="发放时间">
            <span>{{ props.row.salary_time }}</span>
          </el-form-item>
          <el-form-item label="基本工资">
            <span>{{ props.row.status_salary }}</span>
          </el-form-item>
          <el-form-item label="上班天数">
            <span>{{ props.row.salary_days }}</span>
          </el-form-item>
          <el-form-item label="全勤奖奖金">
            <span>{{ props.row.salary_bonus }}</span>
          </el-form-item>
          <el-form-item label="绩效奖金">
            <span>{{ props.row.salary_all }}</span>
          </el-form-item>
          <el-form-item label="个人奖金">
            <span>{{ props.row.salary_personal }}</span>
          </el-form-item>
          <el-form-item label="税额">
            <span>{{ props.row.salary_tax }}</span>
          </el-form-item>
          <el-form-item label="总发放工资">
            <span>{{ props.row.salary_practical }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="员工姓名"
      prop="user_name">
    </el-table-column>
    <el-table-column
      label="工资发放时间"
      prop="salary_time">
    </el-table-column>
    <el-table-column
      label="发放工资"
      prop="salary_practical">
    </el-table-column>
  </el-table>
</template>

<script>
export default{
  data () {
    return {
      tableData: [{
        user_ID: 2020001,
        user_name: '小王',
        salary_time: '2020-12-10',
        status_salary: 6000,
        salary_practical: 6000,
        salary_days: 20,
        salary_bonus: 1000,
        salary_all: 50,
        salary_tax: 100,
        salary_personal: 1000
      }]
    }
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

<template>
<div>
    <router-link to="/S_information">
  <el-button type="primary" round>查看当月工资</el-button>
  </router-link>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
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
export default {

}
</script>

<style>

</style>

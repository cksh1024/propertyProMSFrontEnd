<template>
<div>
    <div></div>
    <div>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="jourTime"
      label="操作时间"
      width="200">
    </el-table-column>
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
      prop="proId"
      label="项目编号"
      width="200">
    </el-table-column>
    <el-table-column
      prop="proName"
      label="项目名称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="jourRemark"
      label="操作类型"
      width="200">
    </el-table-column>
    <el-table-column
      prop="fileName"
      label="操作文件名">
    </el-table-column>
  </el-table>
  </div>
</div>
</template>

<script>

export default {

}
</script>

<style>

</style>

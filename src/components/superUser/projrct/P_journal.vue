<template>
<div>
    <div></div>
    <div>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="jour_time"
      label="操作时间"
      width="200">
    </el-table-column>
    <el-table-column
      prop="user_id"
      label="员工编号"
      width="200">
    </el-table-column>
    <el-table-column
      prop="user_name"
      label="员工姓名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="pro_id"
      label="项目编号"
      width="200">
    </el-table-column>
    <el-table-column
      prop="pro_name"
      label="项目名称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="jour_remark"
      label="操作类型"
      width="200">
    </el-table-column>
    <el-table-column
      prop="file_name"
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

<template>
  <el-table
    :data="proStage"
    stript
    style="width=100%">
    <el-table-column
      prop="proId"
      label="项目id"
      width="200">
    </el-table-column>
    <el-table-column
      prop="proName"
      label="项目名称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="stageType"
      label="项目阶段"
      width="200">
    </el-table-column>
    <el-table-column
      prop="stageStatime"
      label="阶段开始时间"
      width="200">
    </el-table-column>
    <el-table-column
      prop="stageCondition"
      label="阶段情况"
      width="200">
    </el-table-column>
    <el-table-column
      prop="stageEndtime"
      label="阶段结束时间"
      width="200">
    </el-table-column>
    <el-table-column
      prop="stagePay"
      label="阶段奖金"
      width="200">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="修改阶段奖金">
    <el-button type="text" size="small" @click="change">修改</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      proStage: [{
        proId: 2020001,
        proName: '上海汤臣一品',
        stageType: '建模阶段',
        stageStatime: '2000-01-01',
        stageCondition: '未完成',
        stageEndtime: '',
        stagePay: '2000'
      }]
    }
  },
  methods: {
    change () {
      this.$prompt('输入修改金额', '修改项目奖金', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '奖金修改金额为: ' + value
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    }
  }
}
</script>

<style>

</style>

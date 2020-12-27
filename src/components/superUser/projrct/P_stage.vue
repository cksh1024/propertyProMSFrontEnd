<template>
  <el-table
    :data="pro_stage"
    stript
    style="width=100%">
    <el-table-column
      prop="pro_id"
      label="项目id"
      width="200">
    </el-table-column>
    <el-table-column
      prop="pro_name"
      label="项目名称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="stage_type"
      label="项目阶段"
      width="200">
    </el-table-column>
    <el-table-column
      prop="stage_statime"
      label="阶段开始时间"
      width="200">
    </el-table-column>
    <el-table-column
      prop="stage_condition"
      label="阶段情况"
      width="200">
    </el-table-column>
    <el-table-column
      prop="stage_endtime"
      label="阶段结束时间"
      width="200">
    </el-table-column>
    <el-table-column
      prop="stage_pay"
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
      pro_stage: [{
        pro_id: 2020001,
        pro_name: '上海汤臣一品',
        stage_type: '建模阶段',
        stage_statime: '2000-01-01',
        stage_condition: '未完成',
        stage_endtime: '',
        stage_pay: '2000'
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

<template>
  <el-table
    :data="proStages"
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
      prop="stageStateTime"
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
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="change(scope.row)">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      proStages: []
    }
  },
  methods: {
    change (row) {
      this.$prompt('输入修改金额', '修改项目奖金', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        let params = new FormData()
        params.append('proId', row.proId)
        params.append('stagePay', value)
        params.append('stageType', row.stageType)
        axios.post('lclgl/updateStagePay', params)
        .then(res => {
          if (res.status === -1) {
            return this.$message.error('修改失败！')
          }
          this.getProStages()
          this.$message({
            type: 'success',
            message: '奖金修改金额为: ' + value
          })
        })
        .catch(err => {
          console.log(err)
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    getProStages () {
      axios.post('lclgl/getProStages')
      .then(res => {
        for (let index in res.data.proStageInfos) {
          res.data.proStageInfos[index].stageStateTime = this.changeDateFormat(res.data.proStageInfos[index].stageStateTime)
          res.data.proStageInfos[index].stageEndtime = this.changeDateFormat(res.data.proStageInfos[index].stageEndtime)
        }
        this.proStages = res.data.proStageInfos
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
      return cellval
    }
  },
  mounted () {
    this.getProStages()
  }
}
</script>

<style>

</style>

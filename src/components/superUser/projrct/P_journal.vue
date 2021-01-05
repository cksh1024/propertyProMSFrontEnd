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
      prop="staffName"
      label="员工姓名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="proName"
      label="项目名称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="jourType"
      label="操作类型"
      width="200">
    </el-table-column>
    <el-table-column
      prop="fileName"
      label="操作文件名">
    </el-table-column>
    <el-table-column
      prop="jourRemark"
      label="备注">
    </el-table-column>
  </el-table>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    getJournals () {
      axios.post('lclgl/getProJournals')
      .then(res => {
        for (let index in res.data.journals) {
          res.data.journals[index].jourTime = this.changeDateFormat(res.data.journals[index].jourTime)
        }
        this.tableData = res.data.journals
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
    this.getJournals()
  }
}
</script>

<style>

</style>

<template>
  <div>
        <p>未被分配的员工</p>
        <el-table
        ref="multipleTable"
        :data="tableData1"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="userId"
          label="工号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="staffName"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="staffSex"
          label="性别"
          width="120">
        </el-table-column>
        <el-table-column
          prop="statusName"
          label="职位"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <br><br>
        <el-button type="primary" @click="chooseworkers">确认选择</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            tableData1: [],
            multipleSelection: []
        }
    },
    methods: {
        handleSelectionChange (val) {
        this.multipleSelection = val
      },
      showfreeworkers () {
            axios.post('lclgl/staffShow')
            .then(res => {
                console.log(res.data)
                this.tableData1 = res.data
            })
      },
      chooseworkers () {
            let parma = new FormData()
            parma.append('selectedworkers', JSON.stringify(this.multipleSelection))
            axios.post('lclgl/staffselect', parma)
            .then(res => {
                alert(res.data.msg)
                this.showfreeworkers()
            })
      }
    },
    mounted () {
        this.showfreeworkers()
    }
}
</script>

<style>

</style>

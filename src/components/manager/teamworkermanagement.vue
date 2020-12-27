<template>
  <div>
        <p>管理员工</p>
        <el-table
        ref="multipleTable1"
        :data="tableData2"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange1">
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
        <el-button type="primary" @click="deleteworkers">删除员工</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            multipleSelection1: [],
            tableData2: []
        }
    },
    methods: {
        handleSelectionChange1 (val) {
        this.multipleSelection1 = val
      },
        showteamworkers () {
            axios.post('lclgl/teamworkers')
            .then(res => {
                console.log(res.data)
                this.tableData2 = res.data
            })
      },
      deleteworkers () {
            let param = new FormData()
            param.append('selectedteamworkers', JSON.stringify(this.multipleSelection1))
            axios.post('lclgl/teamworkerselect', param)
            .then(res => {
                alert(res.data.msg)
                this.showteamworkers()
            })
      }
    },
    mounted () {
        this.showteamworkers()
    }
}
</script>

<style>

</style>

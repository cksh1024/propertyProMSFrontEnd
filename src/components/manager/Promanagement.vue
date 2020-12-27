<template>
    <div>
          <p>项目阶段完成，进入下一阶段指定下一个团队主管</p>          
          <el-table
            ref="singleTable"
            :data="tableData"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              property="managerId"
              label="工号"
              width="120">
            </el-table-column>
            <el-table-column
              property="managerName"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              property="managerSex"
              label="性别"
              width="120">
            </el-table-column>
            <el-table-column
              property="teamName"
              label="团队名称"
              width="120" >
            </el-table-column>
            <el-table-column
              property="teamType"
              label="团队类型">
            </el-table-column>
          </el-table>
          <br><br>
          <el-button type="primary" @click="switchProstage">确定</el-button>
          <el-button type="primary" @click="returnpage">返回上级页面</el-button>
          
  </div>
    
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    data () {
      return {
        tableData: [],
        currentRow: ''
      }
    },
      computed: {
    ...mapState(['staffInfo'])
    },
    methods: {
      handleCurrentChange (val) {
        this.currentRow = val
      },
      showfreeManagers () {
            axios.post('lclgl/managerShow')
            .then(res => {
                console.log(res.data)
                this.tableData = res.data
            })
      },
      returnpage () {
          this.$router.replace('/manager/projectswitch')
      },
      switchProstage () {
            if (this.currentRow !== null && this.currentRow.length !== 0) {
              let param = new FormData()
              param.append('selectedManager', JSON.stringify(this.currentRow))
              param.append('proId', sessionStorage.getItem('proId'))
              axios.post('lclgl/switchprostage', param)
             .then(res => {
                alert(res.data.msg)
              })
            } else {
              alert('请先选择项目')
            }
      }
    },
    mounted () {
      this.showfreeManagers()
    }
}
</script>

<style>
.manager_input .el-input__inner {
        border-radius: 30px;
        font-size: 15px;
        padding: 25px 20px;
        width: 300px;
    }
</style>

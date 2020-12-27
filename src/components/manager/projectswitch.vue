<template>
  <div>
      <p>已有项目</p>
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
              property="proId"
              label="项目编号"
              width="150">
            </el-table-column>
            <el-table-column
              property="proName"
              label="项目名称"
              width="150">
            </el-table-column>
            <el-table-column
              property="proCondition"
              label="项目状况"
              width="150">
            </el-table-column>
            <el-table-column
              property="stageCondition"
              label="阶段状况">
            </el-table-column>
          </el-table>
          <br><br>
          <el-button type="primary" @click="selectPro" v-if="'后期主管'!==staffInfo.statusType">进入项目</el-button>
          <el-button type="primary" @click="CompletePro" v-if="'后期主管'===staffInfo.statusType">完成项目</el-button>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
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
      selectPro () {
            if (this.currentRow !== null && this.currentRow.length !== 0) {
              sessionStorage.setItem('proId', this.currentRow.proId)
              this.$router.push('/manager/Promanagement')
            } else {
              alert('请先选择项目')
            }
        },
        showmanagePro () {
            axios.post('lclgl/showmanagePro')
            .then(res => {
                console.log(res.data)
                this.tableData = res.data
            })
        },
        CompletePro () {
            if (this.currentRow !== null && this.currentRow.length !== 0) {
              let param = new FormData()
              param.append('completepro', JSON.stringify(this.currentRow))
              axios.post('lclgl/CompletePro', param)
              .then(res => {
                alert(res.data.msg)
                this.showmanagePro()
              })
            } else {
              alert('请先选择项目')
            }
        }
    },
    mounted () {
        this.showmanagePro()
    }
}
</script>

<style>

</style>

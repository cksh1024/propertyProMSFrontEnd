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
          <p>项目回退到：</p>  
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" @click="proBack">确定</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            tableData: [],
            currentRow: '',
            options: [{
              value: '建模阶段',
              label: '建模阶段'
            }, {
              value: '渲染阶段',
              label: '渲染阶段'
            }, {
              value: '后期阶段',
              label: '后期阶段'
            }],
            value: ''
        }
    },
    methods: {
        handleCurrentChange (val) {
        this.currentRow = val
      },
        proBack () {
            if (this.currentRow !== null && this.currentRow.length !== 0) {
              let param = new FormData()
              param.append('stageType', this.value)
              param.append('selectedPro', JSON.stringify(this.currentRow))
              console.log(this.value, this.currentRow)
              axios.post('lclgl/proBack', param)
              .then(res => {
                alert(res.data.msg)
                this.showmanagePro()
              })
            } else {
                alert('请选择项目')
            }
        },
        showmanagePro () {
            axios.post('lclgl/showmanagePro')
            .then(res => {
                console.log(res.data)
                this.tableData = res.data
            })
        }
    },
    mounted () {
        this.showmanagePro()
    }
}
</script>

<style>

</style>

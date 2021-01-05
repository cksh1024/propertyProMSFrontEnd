<template>

  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="proId"
      label="项目编号"
      width="180">
    </el-table-column>

    <el-table-column
      prop="proName"
      label="项目名称"
      width="180">
    </el-table-column>

    <el-table-column
      prop="cusName"
      label="项目客户"
      width="180">
    </el-table-column>

    <el-table-column
      prop="proCreate"
      label="项目开始时间"
      width="180">
    </el-table-column>

    <el-table-column
      label="项目状态">
        <template slot-scope="scope">
          <el-steps :space="200" :active='scope.row.proCondition_number' finish-status="success">
            <el-step title="建模阶段"></el-step>
            <el-step title="渲染阶段"></el-step>
            <el-step title="后期阶段"></el-step>
            <el-step title="已完成"></el-step>
          </el-steps>
        </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'
export default{
  data () {
    return {
      tableData: [{
        proId: 10001,
        proName: '上海汤臣一品',
        cusId: 1001,
        cusName: '马云',
        proCreate: '2000-01-01',
        proCondition: '建模中',
        proCondition_number: 1,
        proEndtime: null
      }, {
        proId: 10002,
        proName: '重庆交通大学',
        cusId: 1002,
        cusName: '马化腾',
        proCreate: '2020-01-01',
        proCondition: '渲染中',
        proCondition_number: 2,
        proEndtime: null
      }]
    }
  },
  mounted () {
    this.getPros()
  },
  methods: {
    getPros () {
      axios.post('lclgl/getPros')
      .then(res => {
        for (let index in res.data.proInfos) {
          res.data.proInfos[index].proCreate = this.changeDateFormat(res.data.proInfos[index].proCreate)
          res.data.proInfos[index].proEndtime = this.changeDateFormat(res.data.proInfos[index].proEndtime)
        }
        this.tableData = res.data.proInfos
        console.log(this.tableData)
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
  }
}
</script>

<style>

</style>

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
      prop="proCondition"
      label="项目状态"
      width="750">
        <el-steps :space="200" :active=tableData.pro_condition_number finish-status="success">
        <el-step title="建模阶段"></el-step>
        <el-step title="渲染阶段"></el-step>
        <el-step title="后期阶段"></el-step>
        <el-step title="已完成"></el-step>
        </el-steps>
    </el-table-column>

    <el-table-column label="详细信息">
        <template  slot-scope="scope">
        <el-button type="primary" round size="mini" @click="handlequery(scope.$index, scope.row)">查看</el-button>
        </template>
    </el-table-column>

  </el-table>
</template>

<script>
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
  methods: {
    handlequery () {
      this.$alert('<a>项目编号:</a>' + this.tableData[0].proId + '<div></div>' +
      '<a>项目名称:</a>' + this.tableData[0].proName + '<div></div>' +
      '<a>客户编号:</a>' + this.tableData[0].cusId + '<div></div>' +
      '<a>客户姓名:</a>' + this.tableData[0].cusName + '<div></div>' +
      '<a>项目开始时间：</a>' + this.tableData[0].proCreate + '<div></div>' +
      '<a>项目状态：</a>' + this.tableData[0].proCondition + '<div></div>' +
      '<a>项目结束时间：</a>' + this.tableData[0].proEndtime + '<div></div>',
      '项目详细信息', {
        dangerouslyUseHTMLString: true
      })
    }
  }
}
</script>

<style>

</style>

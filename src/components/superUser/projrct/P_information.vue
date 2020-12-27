<template>

  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="pro_id"
      label="项目编号"
      width="180">
    </el-table-column>

    <el-table-column
      prop="pro_name"
      label="项目名称"
      width="180">
    </el-table-column>

    <el-table-column
      prop="cus_name"
      label="项目客户"
      width="180">
    </el-table-column>

    <el-table-column
      prop="pro_create"
      label="项目开始时间"
      width="180">
    </el-table-column>

    <el-table-column
      prop="pro_condition"
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
        pro_id: 10001,
        pro_name: '上海汤臣一品',
        cus_id: 1001,
        cus_name: '马云',
        pro_create: '2000-01-01',
        pro_condition: '建模中',
        pro_condition_number: 1,
        pro_endtime: null
      }, {
        pro_id: 10002,
        pro_name: '重庆交通大学',
        cus_id: 1002,
        cus_name: '马化腾',
        pro_create: '2020-01-01',
        pro_condition: '渲染中',
        pro_condition_number: 2,
        pro_endtime: null
      }]
    }
  },
  methods: {
    handlequery () {
      this.$alert('<a>项目编号:</a>' + this.tableData[0].pro_id + '<div></div>' +
      '<a>项目名称:</a>' + this.tableData[0].pro_name + '<div></div>' +
      '<a>客户编号:</a>' + this.tableData[0].cus_id + '<div></div>' +
      '<a>客户姓名:</a>' + this.tableData[0].cus_name + '<div></div>' +
      '<a>项目开始时间：</a>' + this.tableData[0].pro_create + '<div></div>' +
      '<a>项目状态：</a>' + this.tableData[0].pro_condition + '<div></div>' +
      '<a>项目结束时间：</a>' + this.tableData[0].pro_endtime + '<div></div>',
      '项目详细信息', {
        dangerouslyUseHTMLString: true
      })
    }
  }
}
</script>

<style>

</style>

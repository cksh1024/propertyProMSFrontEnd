<template>
    <div>
         <el-table
      :data="tableData"
       stripe
      style="width: 100%">
      <el-table-column
        prop="project_id"
        label="项目编号">
      </el-table-column>
      <el-table-column
        prop="project_name"
        label="项目名称">
         </el-table-column>
      <el-table-column
        prop="cusName"
        label="客户姓名">
      </el-table-column>
      <el-table-column
        prop="create_date"
        label="创建日期">
      </el-table-column>
       <el-table-column
        prop="finished_time"
        label="完成时间">
      </el-table-column>
      <el-table-column
        prop="progress"
        label="项目进度">
      </el-table-column>
         <!-- <el-table-column
      fixed="right"
      label="项目状态">
      <template slot-scope="scope">
         <el-button size= "mini" type="primary" round  @click="check(scope.row)">点击查看</el-button>
      </template>
    </el-table-column> -->
    <!-- <el-table-column
      fixed="right"
      label="文件下载">
      <template slot-scope="scope">
         <el-button size= "mini"  type="primary" round @click="download(scope.row)">点击下载</el-button>
      </template>
    </el-table-column> -->
    </el-table>
    </div>
</template>

<script>
import axios from 'axios'
export default {  
   props: ['check', 'download', 'goBack'],
   data () {
        return {
          tableData: []
        }
    },
    methods: {
        showPros () {
          axios.post('lclgl/getProsByStaffId')
          .then(res => {
            console.log(res.data)
            this.tableData = res.data.pros
          })
          .catch(err => {
            console.log(err)
          })
        }
    },
    mounted () {
        this.showPros()
      }
}
</script>
<style>
</style>
